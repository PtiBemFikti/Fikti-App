import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // 1. Dapatkan data dari request body
    const { id: candidate_id } = await request.json(); // Perhatikan perubahan di sini
    const profile = await getProfileFromCookie();
    const { npm, jurusan, kodeKelas } = profile;

    if (!candidate_id) {
      return NextResponse.json(
        { success: false, message: "Candidate ID is required" },
        { status: 400 }
      );
    }

    // 2. Panggil fungsi vote_candidate di Supabase
    const { data, error } = await supabase.rpc('vote_candidate', {
      p_candidate_id: candidate_id,
      p_npm: npm,
      p_program_studi: jurusan,
      p_kelas: kodeKelas
    });

    if (error) {
      console.error("[VOTE ERROR]", error.message);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    // 3. Return hasil dari fungsi vote_candidate
    return NextResponse.json(data);
    
  } catch (err) {
    const error = err as Error;
    console.error("[VOTE ERROR]", error.message);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}