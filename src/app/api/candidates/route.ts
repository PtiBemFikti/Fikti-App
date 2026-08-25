import { getSupabaseServer } from "@/lib/supabase-server";
import { CandidatePair, ElectionSlug, PemiraElection } from "@/types/pemira";
import { NextResponse } from "next/server";

type ElectionRow = { id: number | string; slug: string; name: string };
type CandidateRow = {
  id: number | string;
  election_id: number | string;
  ballot_number: string | number | null;
  chairman_name: string | null;
  chairman_npm: string | null;
  chairman_class: string | null;
  chairman_image: string | null;
  vice_chairman_name: string | null;
  vice_chairman_npm: string | null;
  vice_chairman_class: string | null;
  vice_chairman_image: string | null;
  vision: string | null;
  missions: unknown;
  targets: unknown;
  flagship_programs: unknown;
  innovation_programs: unknown;
};

const electionSlugs: ElectionSlug[] = ["bem", "himsi"];

export const dynamic = "force-dynamic";

function toStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return typeof value === "string" && value.trim() ? [value] : [];
}

function toCandidatePair(row: CandidateRow): CandidatePair {
  return {
    id: row.id,
    electionId: row.election_id,
    ballotNumber: String(row.ballot_number ?? ""),
    chairman: {
      name: row.chairman_name ?? "",
      npm: row.chairman_npm ?? "",
      className: row.chairman_class ?? "",
      image: row.chairman_image ?? "",
    },
    viceChairman: {
      name: row.vice_chairman_name ?? "",
      npm: row.vice_chairman_npm ?? "",
      className: row.vice_chairman_class ?? "",
      image: row.vice_chairman_image ?? "",
    },
    vision: row.vision ?? "",
    missions: toStringList(row.missions),
    targets: toStringList(row.targets),
    flagshipPrograms: toStringList(row.flagship_programs),
    innovationPrograms: toStringList(row.innovation_programs),
  };
}

export async function GET() {
  const supabaseServer = getSupabaseServer();
  const { data: electionData, error: electionError } = await supabaseServer
    .from("pemira_elections")
    .select("id, slug, name")
    .in("slug", electionSlugs);

  if (electionError) {
    return NextResponse.json({ message: "Gagal ambil data election" }, { status: 500 });
  }

  const elections = (electionData ?? []) as ElectionRow[];
  const { data: candidateData, error: candidateError } = await supabaseServer
    .from("pemira_kandidat")
    .select(
      "id, election_id, ballot_number, chairman_name, chairman_npm, chairman_class, chairman_image, vice_chairman_name, vice_chairman_npm, vice_chairman_class, vice_chairman_image, vision, missions, targets, flagship_programs, innovation_programs"
    )
    .in("election_id", elections.map((election) => election.id));

  if (candidateError) {
    return NextResponse.json({ message: "Gagal ambil data kandidat" }, { status: 500 });
  }

  const candidates = (candidateData ?? []) as CandidateRow[];
  const response: PemiraElection[] = elections
    .filter((election): election is ElectionRow & { slug: ElectionSlug } =>
      electionSlugs.includes(election.slug as ElectionSlug)
    )
    .map((election) => ({
      id: election.id,
      slug: election.slug,
      name: election.name,
      candidates: candidates
        .filter((candidate) => String(candidate.election_id) === String(election.id))
        .map(toCandidatePair),
    }));

  return NextResponse.json(
    { elections: response },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}
