import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import { getAdminSession } from "@/lib/admin-session";
import {
  AdminDashboardData,
  AdminVoter,
  ElectionSlug,
} from "@/types/pemira";

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
          .select("npm, election_id, candidate_id"),
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
    const votedElectionIdsByNpm = new Map<string, Set<string>>();

    for (const vote of votes) {
      if (vote.candidate_id !== null) {
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

        if (vote.npm) {
          const votedElections =
            votedElectionIdsByNpm.get(vote.npm) ?? new Set<string>();
          votedElections.add(electionKey);
          votedElectionIdsByNpm.set(vote.npm, votedElections);
        }
      }
    }

    const electionIdBySlug = new Map(
      elections.map((election) => [election.slug, String(election.id)])
    );
    const response: AdminDashboardData = {
      elections: elections
        .filter((election) => electionSlugs.includes(election.slug as ElectionSlug))
        .map((election) => ({
          id: election.id,
          slug: election.slug as ElectionSlug,
          name: election.name,
          totalVotes: voteCountByElection.get(String(election.id)) ?? 0,
          candidates: candidates
            .filter(
              (candidate) =>
                String(candidate.election_id) === String(election.id)
            )
            .map((candidate) => ({
              id: candidate.id,
              ballotNumber: String(candidate.ballot_number ?? ""),
              chairmanName: candidate.chairman_name ?? "",
              chairmanImage: candidate.chairman_image ?? "",
              viceChairmanName: candidate.vice_chairman_name ?? "",
              voteCount: voteCountByCandidate.get(String(candidate.id)) ?? 0,
            }))
            .sort((a, b) => b.voteCount - a.voteCount),
        })),
      voters: voters.map((voter): AdminVoter => {
        const programStudi = voter.program_studi ?? "";
        const isInformationSystem = programStudi.includes("Sistem Informasi");
        const votedElections = voter.npm
          ? votedElectionIdsByNpm.get(voter.npm) ?? new Set<string>()
          : new Set<string>();

        return {
          id: voter.id,
          npm: voter.npm ?? "",
          programStudi,
          kelas: voter.kelas ?? "",
          bem: votedElections.has(electionIdBySlug.get("bem") ?? "")
            ? "voted"
            : "not-voted",
          himsi: !isInformationSystem
            ? "not-eligible"
            : votedElections.has(electionIdBySlug.get("himsi") ?? "")
              ? "voted"
              : "not-voted",
          createdAt: voter.created_at,
        };
      }),
    };

    return NextResponse.json({ success: true, data: response });
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
