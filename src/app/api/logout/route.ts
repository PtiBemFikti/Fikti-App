import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // 1. Hapus cookies di server side
    const cookieStore = cookies();
    cookieStore.delete('vclass_auth');
    cookieStore.delete('MoodleSession');
    cookieStore.delete('user_jurusan');

    // 2. Buat response redirect
    const response = NextResponse.redirect(new URL("/pemira/auth", "http://localhost:3000"));

    // 3. Set cookies untuk dihapus di client side
    const cookieOptions = {
      path: "/",
      expires: new Date(0),
      sameSite: "lax" as const,
      secure: false, // false untuk development
      httpOnly: true,
    };

    response.cookies.set("vclass_auth", "", cookieOptions);
    response.cookies.set("MoodleSession", "", cookieOptions);
    response.cookies.set("user_jurusan", "", cookieOptions);

    // 4. Tambahkan headers untuk mencegah caching
    response.headers.set("Cache-Control", "no-store, max-age=0");
    response.headers.set("Pragma", "no-cache");

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
}