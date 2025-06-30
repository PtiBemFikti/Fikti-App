// app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/pemira', process.env.NEXT_PUBLIC_SITE_URL));

  response.cookies.set('vclass_auth', '', {
    path: '/',
    expires: new Date(0),
  });

  response.cookies.set('MoodleSession', '', {
    path: '/',
    expires: new Date(0),
  });

  response.cookies.set('user_jurusan', '', {
    path: '/',
    expires: new Date(0),
  });

  return response;
}
