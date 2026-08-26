// app/api/vote/register/route.ts
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  getProfileFromCookie,
  isProfileSessionError,
} from "@/lib/getUserProfile";
import {
  getVoterIdentityIssue,
  VClassProfileError,
} from "@/lib/scrapeProfile";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const supabaseServer = getSupabaseServer();
    const profile = await getProfileFromCookie();
    if (getVoterIdentityIssue(profile)) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak dapat diverifikasi." },
        { status: 422 }
      );
    }

    const { npm, programStudy, classCode } = profile;

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
        program_studi: programStudy,
        kelas: classCode,
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
      "[REGISTER ERROR]",
      err instanceof Error ? err.name : "UnknownError"
    );
    return NextResponse.json(
      { success: false, message: "Data voter tidak dapat disimpan saat ini." },
      { status: 500 }
    );
  }
}
