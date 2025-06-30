import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('vclass_auth', '', {
    path: '/',
    expires: new Date(0),
  });

  response.cookies.set('MoodleSession', '', {
    path: '/',
    expires: new Date(0),
  });

  return response;
}
