import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminSessionCookieOptions,
} from "@/lib/admin-session";

export const dynamic = "force-dynamic";

type AdminRow = {
  id: number | string;
  email: string;
  username: string | null;
  password: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: unknown;
      password?: unknown;
    };
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password || email.length > 254 || password.length > 200) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah" },
        { status: 401 }
      );
    }

    const supabaseServer = getSupabaseServer();
    const { data, error } = await supabaseServer
      .from("pemira_admin")
      .select("id, email, username, password")
      .eq("email", email)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah" },
        { status: 401 }
      );
    }

    const admin = data as AdminRow;
    const passwordMatches = await bcrypt.compare(password, admin.password);
    if (!passwordMatches) {
      return NextResponse.json(
        { success: false, message: "Email atau password salah" },
        { status: 401 }
      );
    }

    const token = await createAdminSessionToken({
      id: String(admin.id),
      email: admin.email,
      username: admin.username ?? admin.email,
    });
    const response = NextResponse.json({
      success: true,
      data: {
        id: String(admin.id),
        email: admin.email,
        username: admin.username ?? admin.email,
      },
    });
    response.cookies.set(
      ADMIN_SESSION_COOKIE,
      token,
      getAdminSessionCookieOptions()
    );
    return response;
  } catch (error) {
    console.error(
      "[ADMIN LOGIN ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Login admin gagal diproses" },
      { status: 500 }
    );
  }
}
