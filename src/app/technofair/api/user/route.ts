import { db } from '@/utils/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = req.json();
    const { npm, name, kelas, email, password }: any = body;

    // check if user email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUserByEmail) {
      return NextResponse.json({ user: null, error: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        npm,
        name,
        kelas,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ user: newUser, message: 'User created successfully' }, { status: 200 });
  } catch (err) {}
}
