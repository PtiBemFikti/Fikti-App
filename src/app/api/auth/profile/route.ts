import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getProfileFromCookie,
  isProfileSessionError,
} from "@/lib/getUserProfile";
import { toLegacyProfile, VClassProfileError } from "@/lib/scrapeProfile";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cookieStore = cookies();
    if (!cookieStore.get("MoodleSession")?.value) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: no session cookie" },
        { status: 401 }
      );
    }

    const identity = await getProfileFromCookie();
    const response = NextResponse.json({
      success: true,
      data: toLegacyProfile(identity),
    });

    response.cookies.set("user_jurusan", toLegacyProfile(identity).jurusan, {
      path: "/",
      maxAge: 60 * 60 * 6,
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    if (isProfileSessionError(error)) {
      return NextResponse.json(
        { success: false, message: "Session V-Class telah berakhir. Silakan login kembali." },
        { status: 401 }
      );
    }
    if (error instanceof VClassProfileError) {
      return NextResponse.json(
        { success: false, message: "Data profil mahasiswa tidak dapat diverifikasi." },
        { status: 422 }
      );
    }

    console.error(
      "[AUTH PROFILE ERROR]",
      error instanceof Error ? error.name : "UnknownError"
    );
    return NextResponse.json(
      { success: false, message: "Profil V-Class tidak dapat diambil saat ini." },
      { status: 502 }
    );
  }
}
