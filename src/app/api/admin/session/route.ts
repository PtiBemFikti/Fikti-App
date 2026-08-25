import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      id: session.id,
      email: session.email,
      username: session.username,
    },
  });
}
