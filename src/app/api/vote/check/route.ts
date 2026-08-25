// app/api/vote/check/route.ts
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import { getProfileFromCookie } from "@/lib/getUserProfile";
import { ElectionSlug, VoteCheckResponse } from "@/types/pemira";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabaseServer = getSupabaseServer();
    const profile = await getProfileFromCookie();
    const { npm, jurusan } = profile;

    const { data: elections, error: electionError } = await supabaseServer
      .from("pemira_elections")
      .select("id, slug")
      .in("slug", ["bem", "himsi"]);

    if (electionError) throw electionError;

    const { data: votes, error: voteError } = await supabaseServer
      .from("pemira_votes")
      .select("election_id")
      .eq("npm", npm);

    if (voteError) throw voteError;

    const isInformationSystem = jurusan.includes("Sistem Informasi");
    const isComputerSystem = jurusan.includes("Sistem Komputer");
    const votedElectionIds = new Set(
      (votes ?? []).map((vote) => String(vote.election_id))
    );

    const data: VoteCheckResponse = {
      bem: { eligible: isInformationSystem || isComputerSystem, hasVoted: false },
      himsi: { eligible: isInformationSystem, hasVoted: false },
    };

    for (const election of elections ?? []) {
      const slug = election.slug as ElectionSlug;
      if (slug in data) {
        data[slug].hasVoted = votedElectionIds.has(String(election.id));
      }
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err) {
    const error = err as Error;
    console.error("[CHECK VOTE ERROR]", error.message);
    return NextResponse.json(
      { success: false, message: error.message || "Terjadi kesalahan saat memeriksa status vote" },
      { status: 500 }
    );
  }
}
