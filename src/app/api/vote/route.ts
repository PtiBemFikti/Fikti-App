// app/api/vote/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const profile = await getProfileFromCookie(); // ⬅️ pakai helper baru
    const { npm, jurusan: p_program_studi, kodeKelas: kelas } = profile;
    const { id } = await req.json();

    const { error } = await supabase.rpc("vote_candidate", {
      p_candidate_id: id,
      p_npm: npm,
      p_program_studi,
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
      message: "Vote berhasil dicatat"
    });
  } catch (err) {
    const error = err as Error;
    console.error("[VOTE ERROR]", error.message);
    return NextResponse.json(
      { success: false, message: error.message || "Terjadi kesalahan saat memproses vote" },
      { status: 500 }
    );
  }
}
