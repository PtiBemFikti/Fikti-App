import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  getProfileFromCookie,
  isProfileSessionError,
} from "@/lib/getUserProfile";
import { isPemiraOpen } from "@/lib/pemira-config";
import { ElectionSlug } from "@/types/pemira";
import {
  getVoterIdentityIssue,
  VClassProfileError,
} from "@/lib/scrapeProfile";
import { isEligibleForElection } from "@/lib/pemira-eligibility";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!isPemiraOpen()) {
      return NextResponse.json(
        { success: false, message: "Pemilihan belum dimulai" },
        { status: 403 }
      );
    }

    const { id: candidateId } = await request.json();
    const profile = await getProfileFromCookie();
    const identityIssue = getVoterIdentityIssue(profile);
    if (identityIssue === "other-program") {
      return NextResponse.json(
        { success: false, message: "Program studi Anda tidak termasuk peserta PEMIRA ini." },
        { status: 403 }
      );
    }
    if (identityIssue === "unknown-program") {
      return NextResponse.json(
        { success: false, message: "Program studi Anda tidak dapat diverifikasi. Silakan hubungi panitia." },
        { status: 422 }
      );
    }
    if (identityIssue === "invalid-class") {
      return NextResponse.json(
        { success: false, message: "Kode kelas Anda tidak dapat diverifikasi. Silakan hubungi panitia." },
        { status: 422 }
      );
    }
    if (identityIssue) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak dapat diverifikasi." },
        { status: 422 }
      );
    }

    const { npm, classCode } = profile;

    const supabaseServer = getSupabaseServer();

    if (candidateId === undefined || candidateId === null || candidateId === "") {
      return NextResponse.json(
        { success: false, message: "Candidate ID is required" },
        { status: 400 }
      );
    }

    const { data: candidate, error: candidateError } = await supabaseServer
      .from("pemira_kandidat")
      .select("id, election_id")
      .eq("id", candidateId)
      .single();

    if (candidateError || !candidate) {
      return NextResponse.json(
        { success: false, message: "Kandidat tidak ditemukan" },
        { status: 404 }
      );
    }

    const { data: election, error: electionError } = await supabaseServer
      .from("pemira_elections")
      .select("id, slug, name")
      .eq("id", candidate.election_id)
      .single();

    if (electionError || !election) {
      return NextResponse.json(
        { success: false, message: "Election kandidat tidak ditemukan" },
        { status: 400 }
      );
    }

    const electionSlug = election.slug as ElectionSlug;
    const eligible = isEligibleForElection(profile.programStudy, electionSlug);

    if (!eligible) {
      return NextResponse.json(
        { success: false, message: "Anda tidak memenuhi syarat untuk election ini" },
        { status: 403 }
      );
    }

    const { error } = await supabaseServer.from("pemira_votes").insert({
      npm,
      program_studi: profile.programStudy,
      kelas: classCode,
      election_id: candidate.election_id,
      candidate_id: candidate.id,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { success: false, message: "Anda sudah melakukan voting untuk election ini" },
          { status: 409 }
        );
      }

      console.error("[VOTE ERROR]", error.message);
      return NextResponse.json(
        { success: false, message: "Voting gagal diproses" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        electionId: candidate.election_id,
        candidateId: candidate.id,
      },
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
      "[VOTE ERROR]",
      err instanceof Error ? err.name : "UnknownError"
    );
    return NextResponse.json(
      { success: false, message: "Voting gagal diproses" },
      { status: 500 }
    );
  }
}
