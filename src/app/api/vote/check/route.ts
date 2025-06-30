// app/api/vote/check/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = cookies();
    const moodle = cookieStore.get('MoodleSession')?.value;

    if (!moodle) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized: no session cookie' },
        { status: 401 }
      );
    }

    const profileRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/profile`, {
      headers: {
        Cookie: `MoodleSession=${moodle}`
      }
    });

    if (!profileRes.ok) {
      return NextResponse.json(
        { success: false, message: 'Failed to fetch profile' },
        { status: 500 }
      );
    }

    const profileData = await profileRes.json();

    if (!profileData.success || !profileData.data) {
      return NextResponse.json(
        { success: false, message: 'Invalid profile data' },
        { status: 400 }
      );
    }

    const { npm } = profileData.data;

    const { data: voter, error } = await supabase
      .from('pemira_voters')
      .select('has_voted')
      .eq('npm', npm)
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        has_voted: voter?.has_voted || false
      }
    });

  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      { success: false, message: error.message || 'Terjadi kesalahan internal' },
      { status: 500 }
    );
  }
}
