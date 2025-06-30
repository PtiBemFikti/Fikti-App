import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { getUserProfile } from "@/lib/getUserProfile";

export async function POST(req: Request) {
  try {
    const profileData = await getUserProfile();
    console.log("🧠 profileData:", profileData);

    const { npm, name, jurusan: program_studi, kodeKelas: kelas } = profileData.data;

    const body = await req.json();
    console.log("📦 Request body:", body);

    const { id } = body;
    if (!id) throw new Error("Kandidat ID tidak ditemukan dalam request body");

    const { error } = await supabase.rpc("vote_candidate", {
      p_candidate_id: id,
      p_npm: npm,
      p_program_studi: program_studi,
      p_kelas: kelas
    });

    if (error) {
      console.error("[RPC ERROR]", error.message);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Vote berhasil dicatat'
    });

  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('[VOTE ERROR]', error.message);
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan saat memproses vote' },
      { status: 500 }
    );
  }
}
