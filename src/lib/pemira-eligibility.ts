import type { ElectionSlug } from "@/types/pemira";
import type { ProgramStudy } from "@/lib/scrapeProfile";

export type PemiraProgramStudy = "SI" | "SK" | "OTHER" | "UNKNOWN";

export function normalizePemiraProgramStudy(
  value: ProgramStudy | string | null | undefined
): PemiraProgramStudy {
  if (!value?.trim()) return "UNKNOWN";

  const normalized = value
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  if (normalized === "UNKNOWN") return "UNKNOWN";
  if (normalized === "OTHER") return "OTHER";

  if (
    normalized === "SI" ||
    normalized === "SISTEM_INFORMASI" ||
    normalized === "SYSTEM_INFORMATION"
  ) {
    return "SI";
  }

  if (
    normalized === "SK" ||
    normalized === "SISTEM_KOMPUTER" ||
    normalized === "COMPUTER_SYSTEM"
  ) {
    return "SK";
  }

  return "OTHER";
}

export function isEligibleForElection(
  programStudy: ProgramStudy | string | null | undefined,
  electionSlug: ElectionSlug
): boolean {
  const normalizedProgramStudy = normalizePemiraProgramStudy(programStudy);

  if (electionSlug === "himsi") {
    return normalizedProgramStudy === "SI";
  }

  return (
    electionSlug === "bem" &&
    (normalizedProgramStudy === "SI" || normalizedProgramStudy === "SK")
  );
}
