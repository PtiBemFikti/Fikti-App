import { register } from '@/components/technofair/lib/firebase/service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();
  await register(req({ status, onmessage }: {status: Boolean, message: String}));
}
