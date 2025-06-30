import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const protectedRoutes = ['/pemira/vote', '/pemira/admin/dashboard'];
    const authRoutes = ['/pemira', '/pemira/auth'];
    const isApiRequest = request.nextUrl.pathname.startsWith('/api');

    const moodleSession = request.cookies.get('MoodleSession')?.value;
    const vclassAuth = request.cookies.get('vclass_auth')?.value;
    const isAuthenticated = !!moodleSession && vclassAuth === 'true';

    const pathname = request.nextUrl.pathname;

    const jurusan = request.cookies.get('user_jurusan')?.value;
    const allowed = jurusan?.includes('Sistem Informasi') || jurusan?.includes('Sistem Komputer');

    if (pathname.startsWith('/pemira/vote')) {
        if (!isAuthenticated || !jurusan || !allowed) {
            const loginUrl = new URL('/pemira/auth', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }




    // Blok akses ke route /pemira/vote dll jika belum login
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!isAuthenticated) {
        const loginUrl = new URL('/pemira/auth', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
        }
    }

    // Kalau sudah login, jangan bisa akses /pemira atau /pemira/auth lagi
    if (authRoutes.includes(pathname) && isAuthenticated) {
        return NextResponse.redirect(new URL('/pemira/auth/validate', request.url));
    }

    // Boleh lewat
    const response = NextResponse.next();
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');

    return response;
}
