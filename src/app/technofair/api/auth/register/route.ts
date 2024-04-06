import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
// import { POST } from '../[...nextauth]/route';

export const POST = async (request: any) => {
  const { name, npm, kelas, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse('User already exists', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    npm,
    kelas,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User created successfully', { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
