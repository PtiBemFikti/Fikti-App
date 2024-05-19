import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import {sign} from "jsonwebtoken";


export async function POST(req) {
  const { email, password } = await req.json();
  try {
    //find user in database
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    //check if user exist
    if (!findUser) {
      return NextResponse.json({ message: "user not found" }, { status: 204});
    }
    //compare password
    const hashedPassword = findUser.password;
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if(!isPasswordValid){
      return NextResponse.json({message: "Invalid Password"})
    }

    const payload = {
      id: findUser.id,
      name:findUser.name,
      email:findUser.email
    }

    const accesstoken = sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:"7d"})

    return NextResponse.json({ accesstoken ,data: payload ,message: "user founded" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
