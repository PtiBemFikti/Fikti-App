import { ElectionSlug } from "@/types/pemira";
import { ProgramStudy } from "@/lib/scrapeProfile";

export function isEligibleForElection(
  programStudy: ProgramStudy,
  electionSlug: ElectionSlug
): boolean {
  if (electionSlug === "himsi") {
    return programStudy === "SISTEM_INFORMASI";
  }

  return (
    electionSlug === "bem" &&
    (programStudy === "SISTEM_INFORMASI" ||
      programStudy === "SISTEM_KOMPUTER")
  );
}
