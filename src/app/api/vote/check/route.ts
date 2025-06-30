// app/api/vote/check/route.ts
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { supabase } from "@/lib/supabase";
import { getBaseUrl } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const moodle = cookieStore.get('MoodleSession')?.value;

    if (!moodle) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized: no session cookie' },
        { status: 401 }
      );
    }

    // Ambil profile user
    const profileRes = await fetch(`${getBaseUrl()}/api/auth/profile`, {
      headers: {
        Cookie: `MoodleSession=${moodle}`
      }
    });

    if (!profileRes.ok) {
      throw new Error('Failed to fetch profile');
    }

    const profileData = await profileRes.json();
    
    if (!profileData.success || !profileData.data) {
      throw new Error('Invalid profile data');
    }

    const { npm } = profileData.data;

    // Cek status voting
    const { data: voter} = await supabase
      .from('pemira_voters')
      .select('has_voted')
      .eq('npm', npm)
      .single();

    return NextResponse.json({
      success: true,
      data: {
        has_voted: voter?.has_voted || false
      }
    });

  } catch (err) {
    const error = err as Error;
    console.error('[CHECK VOTE ERROR]', error.message);
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan saat memeriksa status vote' },
      { status: 500 }
    );
  }
}