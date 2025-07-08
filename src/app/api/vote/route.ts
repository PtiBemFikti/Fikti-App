// app/api/vote/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getProfileFromCookie } from "@/lib/getUserProfile";

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const profile = await getProfileFromCookie();
    const { npm } = profile;

    const { error } = await supabase
      .from("pemira_voters")
      .update({ has_voted: true })
      .eq("npm", npm);

    if (error) {
      console.error("[VOTE UPDATE ERROR]", error.message);
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Status voting berhasil diperbarui" });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
