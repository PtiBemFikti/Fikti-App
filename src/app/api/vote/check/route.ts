// app/api/vote/check/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const profile = await getProfileFromCookie(); // ✅ Panggil helper yang sudah fix
    const { npm } = profile;

    const { data: voter } = await supabase
      .from("pemira_voters")
      .select("has_voted")
      .eq("npm", npm)
      .single();

    return NextResponse.json({
      success: true,
      data: {
        has_voted: voter?.has_voted || false
      }
    });
  } catch (err) {
    const error = err as Error;
    console.error("[CHECK VOTE ERROR]", error.message);
    return NextResponse.json(
      { success: false, message: error.message || "Terjadi kesalahan saat memeriksa status vote" },
      { status: 500 }
    );
  }
}
