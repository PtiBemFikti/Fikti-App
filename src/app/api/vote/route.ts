// app/api/vote/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { getBaseUrl } from "./check/route";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const moodle = cookieStore.get('MoodleSession')?.value;

    if (!moodle) {
      console.log("❌ Tidak ada cookie MoodleSession");
      return NextResponse.json(
        { success: false, message: 'Unauthorized: no session cookie' },
        { status: 401 }
      );
    }

    const profileRes = await fetch(`${getBaseUrl()}/api/auth/profile`, {
      headers: {
        Cookie: `MoodleSession=${moodle}`
      }
    });

    console.log("✅ profileRes status:", profileRes.status);

    if (!profileRes.ok) {
      throw new Error('Failed to fetch profile');
    }

    const profileData = await profileRes.json();
    console.log("🧠 profileData:", profileData);

    if (!profileData.success || !profileData.data) {
      throw new Error('Invalid profile data');
    }

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

  } catch (err) {
    const error = err as Error;
    console.error('[VOTE ERROR]', error.message);
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan saat memproses vote' },
      { status: 500 }
    );
  }
}
