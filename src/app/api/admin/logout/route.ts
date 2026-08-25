import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getAdminSessionCookieOptions,
} from "@/lib/admin-session";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    ...getAdminSessionCookieOptions(),
    maxAge: 0,
  });
  // Remove the obsolete cookie from sessions created before this hardening phase.
  response.cookies.set("admin_auth", "", { path: "/", maxAge: 0 });

  return response;
}
