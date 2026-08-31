import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import { getAdminSession } from "@/lib/admin-session";
import {
  AdminDashboardData,
  AdminVoter,
  AdminVoterElectionStatus,
  ElectionSlug,
  VoteChoice,
} from "@/types/pemira";
import { isEligibleForElection } from "@/lib/pemira-eligibility";

export const dynamic = "force-dynamic";

type ElectionRow = { id: number | string; slug: string; name: string };
type CandidateRow = {
  id: number | string;
  election_id: number | string;
  ballot_number: string | number | null;
  chairman_name: string | null;
  chairman_image: string | null;
  vice_chairman_name: string | null;
};
type VoterRow = {
  id: number | string;
  npm: string | null;
  program_studi: string | null;
  kelas: string | null;
  created_at: string | null;
};
type VoteRow = {
  npm: string | null;
  election_id: number | string | null;
  candidate_id: number | string | null;
  vote_choice: VoteChoice;
  voted_at: string | null;
};

const electionSlugs: ElectionSlug[] = ["bem", "himsi"];

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const supabaseServer = getSupabaseServer();
    const [electionResult, candidateResult, voterResult, voteResult] =
      await Promise.all([
        supabaseServer
          .from("pemira_elections")
          .select("id, slug, name")
          .in("slug", electionSlugs),
        supabaseServer
          .from("pemira_kandidat")
          .select(
            "id, election_id, ballot_number, chairman_name, chairman_image, vice_chairman_name"
          ),
        supabaseServer
          .from("pemira_voters")
          .select("id, npm, program_studi, kelas, created_at")
          .order("created_at", { ascending: false }),
        supabaseServer
          .from("pemira_votes")
          .select("npm, election_id, candidate_id, vote_choice, voted_at"),
      ]);

    if (electionResult.error) throw electionResult.error;
    if (candidateResult.error) throw candidateResult.error;
    if (voterResult.error) throw voterResult.error;
    if (voteResult.error) throw voteResult.error;

    const elections = (electionResult.data ?? []) as ElectionRow[];
    const candidates = (candidateResult.data ?? []) as CandidateRow[];
    const voters = (voterResult.data ?? []) as VoterRow[];
    const votes = (voteResult.data ?? []) as VoteRow[];
    const voteCountByCandidate = new Map<string, number>();
    const voteCountByElection = new Map<string, number>();
    const emptyVoteCountByElection = new Map<string, number>();
    const votedElectionIdsByNpm = new Map<string, Set<string>>();
    const votedAtByNpm = new Map<string, Map<string, string | null>>();

    for (const vote of votes) {
      if (vote.vote_choice === "candidate" && vote.candidate_id !== null) {
        const candidateKey = String(vote.candidate_id);
        voteCountByCandidate.set(
          candidateKey,
          (voteCountByCandidate.get(candidateKey) ?? 0) + 1
        );
      }

      if (vote.election_id !== null) {
        const electionKey = String(vote.election_id);
        voteCountByElection.set(
          electionKey,
          (voteCountByElection.get(electionKey) ?? 0) + 1
        );

        if (vote.vote_choice === "empty") {
          emptyVoteCountByElection.set(
            electionKey,
            (emptyVoteCountByElection.get(electionKey) ?? 0) + 1
          );
        }

        if (vote.npm) {
          const votedElections =
            votedElectionIdsByNpm.get(vote.npm) ?? new Set<string>();
          votedElections.add(electionKey);
          votedElectionIdsByNpm.set(vote.npm, votedElections);

          const votedAtByElection =
            votedAtByNpm.get(vote.npm) ?? new Map<string, string | null>();
          votedAtByElection.set(electionKey, vote.voted_at);
          votedAtByNpm.set(vote.npm, votedAtByElection);
        }
      }
    }

    const electionIdBySlug = new Map(
      elections.map((election) => [election.slug, String(election.id)])
    );
    const adminVoters = voters
      .map((voter): AdminVoter => {
        const programStudi = voter.program_studi ?? "";
        const votedElections = voter.npm
          ? votedElectionIdsByNpm.get(voter.npm) ?? new Set<string>()
          : new Set<string>();
        const votedAtByElection = voter.npm
          ? votedAtByNpm.get(voter.npm) ?? new Map<string, string | null>()
          : new Map<string, string | null>();

        return {
          id: voter.id,
          npm: voter.npm ?? "",
          programStudi,
          kelas: voter.kelas ?? "",
          bem: getVoterElectionStatus(
            programStudi,
            "bem",
            votedElections,
            electionIdBySlug
          ),
          himsi: getVoterElectionStatus(
            programStudi,
            "himsi",
            votedElections,
            electionIdBySlug
          ),
          bemVotedAt: getVotedAt(votedAtByElection, "bem", electionIdBySlug),
          himsiVotedAt: getVotedAt(votedAtByElection, "himsi", electionIdBySlug),
          createdAt: voter.created_at,
        };
      })
      .sort((a, b) =>
        a.npm.localeCompare(b.npm, "id-ID", { numeric: true })
      );

    const adminElections = elections
      .filter((election) =>
        electionSlugs.includes(election.slug as ElectionSlug)
      )
      .map((election) => {
        const slug = election.slug as ElectionSlug;
        const electionId = String(election.id);
        const candidateResults = candidates
          .filter(
            (candidate) =>
              String(candidate.election_id) === electionId
          )
          .map((candidate) => ({
            id: candidate.id,
            ballotNumber: String(candidate.ballot_number ?? ""),
            chairmanName: candidate.chairman_name ?? "",
            chairmanImage: candidate.chairman_image ?? "",
            viceChairmanName: candidate.vice_chairman_name ?? "",
            voteCount: voteCountByCandidate.get(String(candidate.id)) ?? 0,
          }))
          .sort((a, b) =>
            a.ballotNumber.localeCompare(b.ballotNumber, "id-ID", {
              numeric: true,
            })
          );
        const emptyVoteCount = emptyVoteCountByElection.get(electionId) ?? 0;
        const totalVotes = voteCountByElection.get(electionId) ?? 0;
        const optionVoteTotal =
          candidateResults.reduce(
            (total, candidate) => total + candidate.voteCount,
            0
          ) + emptyVoteCount;

        if (optionVoteTotal !== totalVotes) {
          throw new Error(
            `Vote aggregate mismatch for election ${electionId}`
          );
        }

        const eligibleVoters = adminVoters.filter(
          (voter) => voter[slug] !== "not-eligible"
        );
        const votedVoterCount = eligibleVoters.filter(
          (voter) => voter[slug] === "voted"
        ).length;
        const eligibleVoterCount = eligibleVoters.length;

        return {
          id: election.id,
          slug,
          name: election.name,
          totalVotes,
          emptyVoteCount,
          eligibleVoterCount,
          votedVoterCount,
          notVotedVoterCount: eligibleVoterCount - votedVoterCount,
          turnoutPercentage:
            eligibleVoterCount > 0
              ? (votedVoterCount / eligibleVoterCount) * 100
              : 0,
          candidates: candidateResults,
        };
      });

    const response: AdminDashboardData = {
      elections: adminElections,
      voters: adminVoters,
      trackedVoterCount: adminVoters.length,
    };

    return NextResponse.json(
      { success: true, data: response },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error) {
    console.error(
      "[ADMIN PEMIRA DASHBOARD ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Gagal memuat data dashboard PEMIRA" },
      { status: 500 }
    );
  }
}

function getVotedAt(
  votedAtByElection: Map<string, string | null>,
  slug: ElectionSlug,
  electionIdBySlug: Map<string, string>
): string | null {
  const electionId = electionIdBySlug.get(slug);
  return electionId ? votedAtByElection.get(electionId) ?? null : null;
}

function getVoterElectionStatus(
  programStudy: string,
  electionSlug: ElectionSlug,
  votedElectionIds: Set<string>,
  electionIdBySlug: Map<string, string>
): AdminVoterElectionStatus {
  if (!isEligibleForElection(programStudy, electionSlug)) {
    return "not-eligible";
  }

  const electionId = electionIdBySlug.get(electionSlug);
  return electionId && votedElectionIds.has(electionId)
    ? "voted"
    : "not-voted";
}
