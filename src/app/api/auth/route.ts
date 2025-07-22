import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
  success: boolean;
  message?: string;
}

export async function POST(req: Request): Promise<NextResponse<LoginResponse>> {
  try {
    // 1. Ambil halaman login utk token dan cookie awal
    const loginPageRes = await axios.get(
      'https://v-class.gunadarma.ac.id/login/index.php',
      { withCredentials: true }
    );

    const cookieJar = loginPageRes.headers['set-cookie'] as string[] | undefined;
    // console.log('[DEBUG] loginPage set-cookie:', cookieJar);
    if (!cookieJar || cookieJar.length === 0) {
      throw new Error('Tidak ada cookie dari loginPage');
    }

    const tokenMatch = loginPageRes.data.match(/logintoken" value="(\w+)"/);
    const token = tokenMatch ? tokenMatch[1] : null;
    if (!token) throw new Error('Login token tidak ditemukan');

    // 2. Ambil body req
    const { email, password }: { email: string; password: string } = await req.json();

    // Validasi email
    if (!email.endsWith('@student.gunadarma.ac.id')) {
      return NextResponse.json(
        { success: false, message: 'Hanya email UG diperbolehkan' },
        { status: 400 }
      );
    }

    // 3. Request login
    const loginRes = await axios.post(
      'https://v-class.gunadarma.ac.id/login/index.php',
      new URLSearchParams({ username: email, password, logintoken: token }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie: cookieJar.join('; ')
        },
        maxRedirects: 0,
        validateStatus: s => s >= 200 && s < 400
      }
    );

    const setCookies = (loginRes.headers['set-cookie'] as string[] | undefined) || [];
    // console.log('[DEBUG] loginRes set-cookie:', setCookies);
    const moodleSessionCookie = setCookies.find(c => c.includes('MoodleSession'));
    if (!moodleSessionCookie) {
      return NextResponse.json(
        { success: false, message: 'Username atau password salah' },
        { status: 401 }
      );
    }

    // 4. cek akses dashboard
    const myPageRes = await axios.get('https://v-class.gunadarma.ac.id/my/', {
      headers: {
        Cookie: setCookies.map(c => c.split(';')[0]).join('; ')
      },
      validateStatus: () => true
    });

    const ok = myPageRes.status === 200 &&
      (myPageRes.data.includes('Dashboard') || myPageRes.data.includes('Kegiatan Saya'));

    if (!ok) {
      return NextResponse.json(
        { success: false, message: 'Login gagal: tidak bisa akses dashboard' },
        { status: 401 }
      );
    }

    const sessionValue = moodleSessionCookie.split(';')[0].split('=')[1];
    const response = NextResponse.json({ success: true });
    response.cookies.set('MoodleSession', sessionValue, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    response.cookies.set('vclass_auth', 'true', {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (err) {
    const error = err as Error & { response?: AxiosResponse };
    console.error('[API AUTH ERROR]', error.response?.status, error.response?.data, error.message);

    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
    }
}
