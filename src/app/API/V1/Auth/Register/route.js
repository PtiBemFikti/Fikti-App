import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    return NextResponse.json({data:createUser, message: "User created succesfully" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "ERROR" }, { status: 500 });
  }
}
