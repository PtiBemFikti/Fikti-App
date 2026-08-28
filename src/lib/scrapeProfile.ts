import axios from "axios";
import * as cheerio from "cheerio";

export type ProgramStudy =
  | "SISTEM_INFORMASI"
  | "SISTEM_KOMPUTER"
  | "OTHER"
  | "UNKNOWN";

export type AcademicStatus =
  | "ACTIVE"
  | "GRADUATED"
  | "INACTIVE"
  | "UNKNOWN";

export type StudentIdentity = {
  authenticated: boolean;
  name: string | null;
  npm: string | null;
  programStudy: ProgramStudy;
  classCode: string | null;
  academicStatus: AcademicStatus;
  sources: {
    name: string | null;
    npm: string | null;
    programStudy: string | null;
    classCode: string | null;
    academicStatus: string | null;
  };
};

export class VClassSessionError extends Error {
  readonly code = "VCLASS_SESSION_INVALID";
}

export class VClassProfileError extends Error {
  readonly code = "VCLASS_PROFILE_INVALID";
}

export class VClassUpstreamError extends Error {
  readonly code = "VCLASS_UPSTREAM_ERROR";
}

type ParsedCourse = {
  classCode: string | null;
  major: string;
  sourceText: string;
  sourceIndex: number;
};

type RankedClassCode = {
  classCode: string;
  academicStartYear: number | null;
  academicEndYear: number | null;
  termRank: number;
  level: number;
  classNumber: number;
  sourceIndex: number;
};

const NPM_PATTERN = /^\d{6,12}$/;
const CLASS_PATTERN = /\b\d{1,3}\s*(KA|KB)\s*\d{2,4}\b/i;

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeStudyText(value: string): string {
  return normalizeWhitespace(value)
    .replace(/[()[\],.:;|/_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function parseProgramStudy(value: string): ProgramStudy {
  const normalized = normalizeStudyText(value);
  if (!normalized) return "UNKNOWN";
  const informationSystem = /\bsistem\s+informasi\b/.test(normalized);
  const computerSystem = /\bsistem\s+komputer\b/.test(normalized);

  if (informationSystem && computerSystem) return "UNKNOWN";
  if (informationSystem) return "SISTEM_INFORMASI";
  if (computerSystem) return "SISTEM_KOMPUTER";
  return "OTHER";
}

function normalizeNpm(value: string): string | null {
  const candidate = value.replace(/\s+/g, "").trim();
  return NPM_PATTERN.test(candidate) ? candidate : null;
}

function extractNpm(value: string): string | null {
  const match = value.match(/\b\d{6,12}\b/);
  return match ? normalizeNpm(match[0]) : null;
}

function normalizeClassCode(value: string): string | null {
  const match = value.match(CLASS_PATTERN);
  if (!match) return null;

  const normalized = match[0].replace(/\s+/g, "").toUpperCase();
  return normalized.length > 3 ? normalized : null;
}

function getAcademicPeriod(sourceText: string): {
  startYear: number | null;
  endYear: number | null;
  termRank: number;
} {
  const match = sourceText.match(
    /\b(ATA|PTA)\s+(\d{4})\s*\/\s*(\d{4})\b/i
  );
  if (!match) {
    return { startYear: null, endYear: null, termRank: 0 };
  }

  return {
    startYear: Number(match[2]),
    endYear: Number(match[3]),
    // In one academic year, PTA precedes ATA in the V-Class course cycle.
    termRank: match[1].toUpperCase() === "ATA" ? 2 : 1,
  };
}

function toRankedClassCode(course: ParsedCourse): RankedClassCode | null {
  if (!course.classCode) return null;

  const classParts = course.classCode.match(/^(\d{1,3})(KA|KB)(\d{2,4})$/i);
  if (!classParts) return null;

  const period = getAcademicPeriod(course.sourceText);
  return {
    classCode: course.classCode,
    academicStartYear: period.startYear,
    academicEndYear: period.endYear,
    termRank: period.termRank,
    level: Number(classParts[1]),
    classNumber: Number(classParts[3]),
    sourceIndex: course.sourceIndex,
  };
}

function selectBestClassCode(courses: ParsedCourse[]): string | null {
  const candidates = courses
    .map(toRankedClassCode)
    .filter((candidate): candidate is RankedClassCode => Boolean(candidate));

  if (candidates.length === 0) return null;

  const ranked = [...candidates].sort((a, b) => {
    const aHasPeriod = a.academicEndYear !== null;
    const bHasPeriod = b.academicEndYear !== null;

    if (aHasPeriod !== bHasPeriod) return aHasPeriod ? -1 : 1;
    if (a.academicEndYear !== b.academicEndYear) {
      return (b.academicEndYear ?? 0) - (a.academicEndYear ?? 0);
    }
    if (a.academicStartYear !== b.academicStartYear) {
      return (b.academicStartYear ?? 0) - (a.academicStartYear ?? 0);
    }
    if (a.termRank !== b.termRank) return b.termRank - a.termRank;
    if (a.level !== b.level) return b.level - a.level;
    if (a.classNumber !== b.classNumber) {
      return b.classNumber - a.classNumber;
    }

    return a.sourceIndex - b.sourceIndex;
  });

  const selected = ranked[0].classCode;
  if (process.env.NODE_ENV !== "production" && candidates.length > 1) {
    console.debug("[VCLASS CLASS SELECTION]", {
      detectedClasses: Array.from(
        new Set(candidates.map(({ classCode }) => classCode))
      ),
      selected,
    });
  }

  return selected;
}

function findLabeledValue(
  $: cheerio.CheerioAPI,
  labels: RegExp
): string | null {
  const selectors = ["dt", "th", "label"];

  for (const selector of selectors) {
    let result: string | null = null;
    $(selector).each((_, element) => {
      if (result) return;

      const label = normalizeWhitespace($(element).text()).replace(/:$/, "");
      if (!labels.test(label)) return;

      const siblingText = normalizeWhitespace($(element).next().text());
      if (siblingText) result = siblingText;
    });

    if (result) return result;
  }

  return null;
}

function isLoginPage($: cheerio.CheerioAPI): boolean {
  const hasLoginForm = $(
    'form#login, form[action*="login"], input[name="password"]'
  ).length > 0;
  const heading = normalizeWhitespace($("h1, h2").first().text()).toLowerCase();

  return hasLoginForm || heading === "login" || heading === "log in";
}

function assertProfilePage(html: string): cheerio.CheerioAPI {
  if (!html.trim()) {
    throw new VClassProfileError("Empty V-Class profile response");
  }

  const $ = cheerio.load(html);
  if (isLoginPage($)) {
    throw new VClassSessionError("V-Class returned the login page");
  }

  const profileHeading = normalizeWhitespace(
    $(".page-header-headings h1").first().text()
  );
  if (!profileHeading) {
    throw new VClassProfileError("V-Class profile marker is missing");
  }

  return $;
}

function parseCourses($: cheerio.CheerioAPI): ParsedCourse[] {
  const courseLabel = $("dt")
    .filter((_, element) =>
      /course\s+profiles/i.test(normalizeWhitespace($(element).text()))
    )
    .first();

  if (!courseLabel.length) return [];

  const courseItems = courseLabel.nextAll("dd").first().find("li");
  return courseItems
    .map((index, element) => {
      const sourceText = normalizeWhitespace($(element).text());
      const parts = sourceText
        .split("|")
        .map((part) => normalizeWhitespace(part));

      return {
        classCode: normalizeClassCode(parts[1] ?? sourceText),
        major: parts[2] ?? "",
        sourceText,
        sourceIndex: index,
      };
    })
    .get();
}

function detectProgramStudy(
  courses: ParsedCourse[],
  npm: string | null,
  explicitProgramStudy: string | null
): { value: ProgramStudy; source: string | null } {
  if (explicitProgramStudy) {
    const parsed = parseProgramStudy(explicitProgramStudy);
    return {
      value: parsed,
      source: parsed === "UNKNOWN" ? "profile-program-study-unknown" : "profile-program-study",
    };
  }

  const hasKaClass = courses.some((course) => /KA/i.test(course.classCode ?? ""));
  const hasKbClass = courses.some((course) => /KB/i.test(course.classCode ?? ""));

  if (hasKaClass && !hasKbClass) {
    return { value: "SISTEM_INFORMASI", source: "course-code-fallback" };
  }
  if (hasKbClass && !hasKaClass) {
    return { value: "SISTEM_KOMPUTER", source: "course-code-fallback" };
  }
  if (hasKaClass && hasKbClass) {
    return { value: "UNKNOWN", source: "course-code-conflict" };
  }

  if (npm?.startsWith("101") || npm?.startsWith("111")) {
    return { value: "SISTEM_INFORMASI", source: "npm-prefix-fallback" };
  }
  if (npm?.startsWith("201") || npm?.startsWith("211")) {
    return { value: "SISTEM_KOMPUTER", source: "npm-prefix-fallback" };
  }

  return { value: "UNKNOWN", source: "unknown" };
}

function parseProfileHtml($: cheerio.CheerioAPI): StudentIdentity {
  const heading = normalizeWhitespace($(".page-header-headings h1").first().text());
  const labeledNpm = findLabeledValue(
    $,
    /^(npm|nim|nomor\s+pokok\s+mahasiswa)$/i
  );
  const headingNpm = extractNpm(heading);
  const npm = normalizeNpm(labeledNpm ?? headingNpm ?? "");
  const nameFromHeading = npm
    ? normalizeWhitespace(heading.replace(new RegExp(`\\s*${npm}\\s*$`), ""))
    : null;
  const nameFromLabel = findLabeledValue($, /^(nama|name)$/i);
  const explicitProgramStudy = findLabeledValue(
    $,
    /^(program\s+studi|jurusan|study\s+program)$/i
  );
  const explicitClassCode = findLabeledValue(
    $,
    /^(kelas|class|kode\s+kelas|class\s+code)$/i
  );
  const name = normalizeWhitespace(nameFromLabel ?? nameFromHeading ?? "") || null;
  const courses = parseCourses($);
  const program = detectProgramStudy(courses, npm, explicitProgramStudy);
  const classCodeFromCourses = selectBestClassCode(courses);
  const classCode =
    classCodeFromCourses ?? normalizeClassCode(explicitClassCode ?? "");

  return {
    authenticated: true,
    name,
    npm,
    programStudy: program.value,
    classCode,
    academicStatus: "UNKNOWN",
    sources: {
      name: nameFromLabel ? "profile-label" : name ? "profile-heading" : null,
      npm: labeledNpm && npm ? "profile-label" : npm ? "profile-heading" : null,
      programStudy: program.source,
      classCode: classCodeFromCourses
        ? "course-profile-ranked"
        : classCode
          ? "profile-class-label"
          : null,
      academicStatus: null,
    },
  };
}

export function parseVClassProfile(html: string): StudentIdentity {
  return parseProfileHtml(assertProfilePage(html));
}

export async function fetchVClassProfile(moodle: string): Promise<string> {
  try {
    const response = await axios.get(
      "https://v-class.gunadarma.ac.id/user/profile.php",
      {
        headers: {
          Cookie: `MoodleSession=${moodle}`,
          "User-Agent": "Mozilla/5.0",
        },
        maxRedirects: 0,
        validateStatus: () => true,
      }
    );

    if (
      response.status === 401 ||
      response.status === 403 ||
      (response.status >= 300 && response.status < 400)
    ) {
      throw new VClassSessionError("V-Class session is invalid or expired");
    }
    if (response.status !== 200 || typeof response.data !== "string") {
      throw new VClassUpstreamError("Unexpected V-Class profile response");
    }

    return response.data;
  } catch (error) {
    if (
      error instanceof VClassSessionError ||
      error instanceof VClassUpstreamError
    ) {
      throw error;
    }
    throw new VClassUpstreamError("Unable to fetch V-Class profile");
  }
}

export async function scrapeProfileFromVClass(
  moodle: string
): Promise<StudentIdentity> {
  return parseVClassProfile(await fetchVClassProfile(moodle));
}

export function isVoterIdentityComplete(identity: StudentIdentity): boolean {
  return Boolean(
    identity.authenticated &&
      identity.npm &&
      NPM_PATTERN.test(identity.npm) &&
      identity.classCode &&
      CLASS_PATTERN.test(identity.classCode) &&
      (identity.programStudy === "SISTEM_INFORMASI" ||
        identity.programStudy === "SISTEM_KOMPUTER")
  );
}

export function hasValidNpm(identity: StudentIdentity): boolean {
  return Boolean(identity.npm && NPM_PATTERN.test(identity.npm));
}

export function hasValidClassCode(identity: StudentIdentity): boolean {
  return Boolean(identity.classCode && CLASS_PATTERN.test(identity.classCode));
}

export type VoterIdentityIssue =
  | "invalid-npm"
  | "other-program"
  | "unknown-program"
  | "invalid-class"
  | null;

export function getVoterIdentityIssue(
  identity: StudentIdentity
): VoterIdentityIssue {
  if (!identity.authenticated || !hasValidNpm(identity)) return "invalid-npm";
  if (identity.programStudy === "OTHER") return "other-program";
  if (identity.programStudy === "UNKNOWN") return "unknown-program";
  if (!hasValidClassCode(identity)) return "invalid-class";
  return null;
}

export function toLegacyProfile(identity: StudentIdentity) {
  const isInformationSystem = identity.programStudy === "SISTEM_INFORMASI";
  const isComputerSystem = identity.programStudy === "SISTEM_KOMPUTER";

  return {
    name: identity.name ?? "",
    npm: identity.npm ?? "",
    kodeKelas: identity.classCode ?? "",
    jurusan: isInformationSystem
      ? "Sistem Informasi"
      : isComputerSystem
        ? "Sistem Komputer"
        : identity.programStudy === "OTHER"
          ? "Program studi di luar peserta PEMIRA"
          : "Tidak dapat diverifikasi",
    programStudy: identity.programStudy,
    isInformationSystem,
    isComputerSystem,
  };
}
