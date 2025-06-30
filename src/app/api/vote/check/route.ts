// app/api/vote/check/route.ts
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { getUserProfile } from "@/lib/getUserProfile";

export async function GET() {
  try {
    const profile = await getUserProfile();
    const { npm } = profile.data;

    const { data: voter } = await supabase
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

  } catch (err: unknown) {
  const error = err instanceof Error ? err : new Error(String(err));
  }
}
