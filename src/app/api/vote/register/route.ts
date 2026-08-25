// app/api/vote/register/route.ts
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const supabaseServer = getSupabaseServer();
    const profile = await getProfileFromCookie();
    const {  npm, jurusan, kodeKelas } = profile;

    // Cek apakah user sudah terdaftar
    const { data: existing } = await supabaseServer
      .from("pemira_voters")
      .select("id")
      .eq("npm", npm)
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "Sudah terdaftar"
      });
    }

    const { error } = await supabaseServer.from("pemira_voters").insert([
      {
        npm,
        program_studi: jurusan,
        kelas: kodeKelas,
      },
    ]);

    if (error) {
      console.error("[REGISTER ERROR]", error.message);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: "Data voter berhasil disimpan" });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
