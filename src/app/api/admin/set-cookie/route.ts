import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, message: "Endpoint admin session lama sudah tidak digunakan" },
    { status: 410 }
  );
}
