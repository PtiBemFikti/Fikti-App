import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Dapatkan URL dasar dari environment variable
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const redirectUrl = new URL('/pemira', baseUrl).toString();

    const response = NextResponse.redirect(redirectUrl);

    // Daftar cookie yang perlu dihapus
    const cookiesToDelete = [
      'vclass_auth',
      'MoodleSession',
      'user_jurusan',
    ];

    cookiesToDelete.forEach(cookieName => {
      response.cookies.set(cookieName, '', {
        path: '/',
        expires: new Date(0),
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        domain: process.env.NODE_ENV === 'production' ? 'https://bemfikti-gunadarma.web.id/' : undefined,
      });
    });

    response.headers.set('Cache-Control', 'no-store, max-age=0');

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal melakukan logout' },
      { status: 500 }
    );
  }
}