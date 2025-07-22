import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { id: candidate_id } = await request.json(); 
    const profile = await getProfileFromCookie();
    const { npm, jurusan, kodeKelas } = profile;

    if (!candidate_id) {
      return NextResponse.json(
        { success: false, message: "Candidate ID is required" },
        { status: 400 }
      );
    }

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