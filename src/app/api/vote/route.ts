import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import { getProfileFromCookie } from "@/lib/getUserProfile";
import { isPemiraOpen } from "@/lib/pemira-config";
import { ElectionSlug } from "@/types/pemira";

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
    const { npm, jurusan, kodeKelas } = profile;

    if (
      typeof npm !== "string" ||
      !npm.trim() ||
      typeof jurusan !== "string" ||
      !jurusan.trim() ||
      typeof kodeKelas !== "string" ||
      !kodeKelas.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak lengkap" },
        { status: 400 }
      );
    }

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
    const isInformationSystem = jurusan.includes("Sistem Informasi");
    const isComputerSystem = jurusan.includes("Sistem Komputer");
    const eligible = electionSlug === "himsi"
      ? isInformationSystem
      : electionSlug === "bem" && (isInformationSystem || isComputerSystem);

    if (!eligible) {
      return NextResponse.json(
        { success: false, message: "Anda tidak memenuhi syarat untuk election ini" },
        { status: 403 }
      );
    }

    const { error } = await supabaseServer.from("pemira_votes").insert({
      npm,
      program_studi: jurusan,
      kelas: kodeKelas,
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
    const error = err as Error;
    console.error("[VOTE ERROR]", error.message);
    return NextResponse.json(
      { success: false, message: "Voting gagal diproses" },
      { status: 500 }
    );
  }
}
