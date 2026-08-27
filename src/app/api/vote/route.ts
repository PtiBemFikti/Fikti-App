import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  getProfileFromCookie,
  isProfileSessionError,
} from "@/lib/getUserProfile";
import { isPemiraOpen } from "@/lib/pemira-config";
import { ElectionSlug, VoteChoice } from "@/types/pemira";
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

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Payload vote tidak valid" },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Pilihan vote tidak valid" },
        { status: 400 }
      );
    }

    const requestBody = body as Record<string, unknown>;
    const electionId = requestBody.electionId;
    const choice = requestBody.choice;
    const candidateId = requestBody.candidateId;

    if (
      !isPositiveDatabaseId(electionId) ||
      (choice !== "candidate" && choice !== "empty")
    ) {
      return NextResponse.json(
        { success: false, message: "Election dan pilihan vote wajib diisi" },
        { status: 400 }
      );
    }

    const voteChoice: VoteChoice = choice;
    const hasCandidateId = Object.prototype.hasOwnProperty.call(
      requestBody,
      "candidateId"
    );

    if (voteChoice === "empty" && hasCandidateId) {
      return NextResponse.json(
        {
          success: false,
          message: "Kotak Kosong tidak boleh menyertakan candidateId",
        },
        { status: 400 }
      );
    }

    if (
      voteChoice === "candidate" &&
      !isPositiveDatabaseId(candidateId)
    ) {
      return NextResponse.json(
        { success: false, message: "Candidate ID wajib diisi" },
        { status: 400 }
      );
    }

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

    const { data: election, error: electionError } = await supabaseServer
      .from("pemira_elections")
      .select("id, slug, name")
      .eq("id", electionId)
      .single();

    if (electionError || !election) {
      return NextResponse.json(
        { success: false, message: "Election kandidat tidak ditemukan" },
        { status: 400 }
      );
    }

    const electionSlug = election.slug as ElectionSlug;
    if (electionSlug !== "bem" && electionSlug !== "himsi") {
      return NextResponse.json(
        { success: false, message: "Election tidak didukung" },
        { status: 400 }
      );
    }

    const eligible = isEligibleForElection(profile.programStudy, electionSlug);

    if (!eligible) {
      return NextResponse.json(
        { success: false, message: "Anda tidak memenuhi syarat untuk election ini" },
        { status: 403 }
      );
    }

    let storedCandidateId: number | string | null = null;

    if (voteChoice === "candidate") {
      const { data: candidate, error: candidateError } = await supabaseServer
        .from("pemira_kandidat")
        .select("id, election_id")
        .eq("id", candidateId)
        .eq("election_id", election.id)
        .single();

      if (candidateError || !candidate) {
        return NextResponse.json(
          {
            success: false,
            message: "Kandidat tidak ditemukan pada election ini",
          },
          { status: 404 }
        );
      }

      storedCandidateId = candidate.id;
    } else {
      const { count, error: candidateCountError } = await supabaseServer
        .from("pemira_kandidat")
        .select("id", { count: "exact", head: true })
        .eq("election_id", election.id);

      if (candidateCountError) throw candidateCountError;

      if (count !== 1) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Kotak Kosong hanya tersedia untuk election dengan satu pasangan calon",
          },
          { status: 400 }
        );
      }
    }

    const { error } = await supabaseServer.from("pemira_votes").insert({
      npm,
      program_studi: profile.programStudy,
      kelas: classCode,
      election_id: election.id,
      candidate_id: storedCandidateId,
      vote_choice: voteChoice,
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
        electionId: election.id,
        candidateId: storedCandidateId,
        choice: voteChoice,
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

function isPositiveDatabaseId(value: unknown): value is number | string {
  if (typeof value !== "string" && typeof value !== "number") return false;

  const normalized = String(value).trim();
  return /^\d+$/.test(normalized) && Number(normalized) > 0;
}
