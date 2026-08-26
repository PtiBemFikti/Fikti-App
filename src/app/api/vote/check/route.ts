// app/api/vote/check/route.ts
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  getProfileFromCookie,
  isProfileSessionError,
} from "@/lib/getUserProfile";
import { ElectionSlug, VoteCheckResponse } from "@/types/pemira";
import {
  getVoterIdentityIssue,
  VClassProfileError,
} from "@/lib/scrapeProfile";
import { isEligibleForElection } from "@/lib/pemira-eligibility";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const supabaseServer = getSupabaseServer();
    const profile = await getProfileFromCookie();
    if (getVoterIdentityIssue(profile)) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak dapat diverifikasi." },
        { status: 422 }
      );
    }

    const { npm } = profile;

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

    const votedElectionIds = new Set(
      (votes ?? []).map((vote) => String(vote.election_id))
    );

    const data: VoteCheckResponse = {
      bem: {
        eligible: isEligibleForElection(profile.programStudy, "bem"),
        hasVoted: false,
      },
      himsi: {
        eligible: isEligibleForElection(profile.programStudy, "himsi"),
        hasVoted: false,
      },
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
    if (isProfileSessionError(err)) {
      return NextResponse.json(
        { success: false, message: "Session V-Class telah berakhir. Silakan login kembali." },
        { status: 401 }
      );
    }
    if (err instanceof VClassProfileError) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak dapat diverifikasi." },
        { status: 422 }
      );
    }

    console.error(
      "[CHECK VOTE ERROR]",
      err instanceof Error ? err.name : "UnknownError"
    );
    return NextResponse.json(
      { success: false, message: "Status voting tidak dapat diperiksa saat ini." },
      { status: 500 }
    );
  }
}
