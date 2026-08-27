import { normalizePemiraProgramStudy } from "./pemira-eligibility";
import type {
  AdminVoter,
  AdminVoterElectionStatus,
} from "@/types/pemira";

export type AdminProgramFilter = "all" | "SI" | "SK";
export type AdminStatusFilter = "all" | AdminVoterElectionStatus;

export type AdminVoterFilters = {
  search: string;
  program: AdminProgramFilter;
  bemStatus: AdminStatusFilter;
  himsiStatus: AdminStatusFilter;
};

export function filterAdminVoters(
  voters: AdminVoter[],
  filters: AdminVoterFilters
): AdminVoter[] {
  const query = normalizeAdminVoterSearch(filters.search);

  return voters
    .filter((voter) => {
      const matchesSearch =
        !query ||
        [voter.npm, voter.programStudi, voter.kelas]
          .map(normalizeAdminVoterSearch)
          .some((value) => value.includes(query));
      const matchesProgram =
        filters.program === "all" ||
        normalizePemiraProgramStudy(voter.programStudi) === filters.program;
      const matchesBem =
        filters.bemStatus === "all" || voter.bem === filters.bemStatus;
      const matchesHimsi =
        filters.himsiStatus === "all" ||
        voter.himsi === filters.himsiStatus;

      return matchesSearch && matchesProgram && matchesBem && matchesHimsi;
    })
    .sort((a, b) =>
      a.npm.localeCompare(b.npm, "id-ID", { numeric: true })
    );
}

export function paginateAdminVoters(
  voters: AdminVoter[],
  requestedPage: number,
  requestedPageSize: number
) {
  const pageSize = Math.max(1, Math.floor(requestedPageSize));
  const totalItems = voters.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const page = Math.min(Math.max(Math.floor(requestedPage), 1), totalPages);
  const startIndex = (page - 1) * pageSize;

  return {
    items: voters.slice(startIndex, startIndex + pageSize),
    page,
    pageSize,
    totalItems,
    totalPages,
    startIndex,
  };
}

function normalizeAdminVoterSearch(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("id-ID")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}
