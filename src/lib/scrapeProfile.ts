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
    .map((_, element) => {
      const sourceText = normalizeWhitespace($(element).text());
      const parts = sourceText
        .split("|")
        .map((part) => normalizeWhitespace(part));

      return {
        classCode: normalizeClassCode(parts[1] ?? sourceText),
        major: parts[2] ?? "",
        sourceText,
      };
    })
    .get();
}

function detectProgramStudy(
  courses: ParsedCourse[],
  npm: string | null
): { value: ProgramStudy; source: string | null } {
  const majorValues = courses
    .map((course) => parseProgramStudy(course.major))
    .filter((value) => value !== "UNKNOWN");
  const uniqueMajors = Array.from(new Set(majorValues));

  if (uniqueMajors.length === 1) {
    return { value: uniqueMajors[0], source: "profile-major" };
  }
  if (uniqueMajors.length > 1) {
    return { value: "UNKNOWN", source: "profile-major-conflict" };
  }

  const courseValues = courses
    .map((course) => {
      const parsed = parseProgramStudy(course.sourceText);
      return parsed === "OTHER" ? "UNKNOWN" : parsed;
    })
    .filter((value) => value !== "UNKNOWN");
  const uniqueCourseValues = Array.from(new Set(courseValues));

  if (uniqueCourseValues.length === 1) {
    return { value: uniqueCourseValues[0], source: "course-code-fallback" };
  }
  if (uniqueCourseValues.length > 1) {
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
  const name = normalizeWhitespace(nameFromLabel ?? nameFromHeading ?? "") || null;
  const courses = parseCourses($);
  const program = detectProgramStudy(courses, npm);
  const classCode = courses.find((course) => course.classCode)?.classCode ?? null;

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
      classCode: classCode ? "course-profile" : null,
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
