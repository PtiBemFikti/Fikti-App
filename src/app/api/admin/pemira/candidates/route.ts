import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  AdminManagedCandidate,
  AdminManagedElection,
  ElectionSlug,
} from "@/types/pemira";

export const dynamic = "force-dynamic";

type ElectionRow = {
  id: number | string;
  slug: string;
  name: string | null;
  description: string | null;
  is_active: boolean | null;
};

type CandidateRow = {
  id: number | string;
  election_id: number | string;
  ballot_number: number | string | null;
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

function toStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function toManagedCandidate(row: CandidateRow): AdminManagedCandidate {
  return {
    id: row.id,
    electionId: row.election_id,
    ballotNumber: String(row.ballot_number ?? ""),
    chairmanName: row.chairman_name ?? "",
    chairmanNpm: row.chairman_npm ?? "",
    chairmanClass: row.chairman_class ?? "",
    chairmanImage: row.chairman_image ?? "",
    viceChairmanName: row.vice_chairman_name ?? "",
    viceChairmanNpm: row.vice_chairman_npm ?? "",
    viceChairmanClass: row.vice_chairman_class ?? "",
    viceChairmanImage: row.vice_chairman_image ?? "",
    vision: row.vision ?? "",
    missions: toStringList(row.missions),
    targets: toStringList(row.targets),
    flagshipPrograms: toStringList(row.flagship_programs),
    innovationPrograms: toStringList(row.innovation_programs),
  };
}

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const supabaseServer = getSupabaseServer();
    const { data: electionData, error: electionError } = await supabaseServer
      .from("pemira_elections")
      .select("id, slug, name, description, is_active")
      .in("slug", electionSlugs)
      .order("id", { ascending: true });

    if (electionError) throw electionError;

    const elections = (electionData ?? []) as ElectionRow[];
    const { data: candidateData, error: candidateError } = await supabaseServer
      .from("pemira_kandidat")
      .select(
        "id, election_id, ballot_number, chairman_name, chairman_npm, chairman_class, chairman_image, vice_chairman_name, vice_chairman_npm, vice_chairman_class, vice_chairman_image, vision, missions, targets, flagship_programs, innovation_programs"
      )
      .in(
        "election_id",
        elections.map((election) => election.id)
      )
      .order("ballot_number", { ascending: true });

    if (candidateError) throw candidateError;

    const candidates = (candidateData ?? []) as CandidateRow[];
    const response: AdminManagedElection[] = elections
      .filter((election) => electionSlugs.includes(election.slug as ElectionSlug))
      .map((election) => ({
        id: election.id,
        slug: election.slug as ElectionSlug,
        name: election.name ?? "",
        description: election.description ?? "",
        isActive: election.is_active ?? false,
        candidates: candidates
          .filter(
            (candidate) =>
              String(candidate.election_id) === String(election.id)
          )
          .map(toManagedCandidate),
      }));

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error(
      "[ADMIN CANDIDATES GET ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Gagal memuat data kandidat" },
      { status: 500 }
    );
  }
}
