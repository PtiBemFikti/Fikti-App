import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isApiRequest = pathname.startsWith('/api');

  // USER cookies
  const vclassAuth = request.cookies.get('vclass_auth')?.value;
  const moodleSession = request.cookies.get('MoodleSession')?.value;
  const jurusan = request.cookies.get('user_jurusan')?.value;

  const isUserAuthenticated = !!moodleSession && vclassAuth === 'true';
  const isAllowedJurusan =
    jurusan?.includes('Sistem Informasi') || jurusan?.includes('Sistem Komputer');

  // ADMIN cookies
  const adminAuth = request.cookies.get('admin_auth')?.value;
  const isAdminAuthenticated = adminAuth === 'true';

  // ROUTES
  const userProtectedRoutes = [
    '/pemira/profile',
    '/pemira/profile/vote',
    '/pemira/profile/voter-data',
    '/pemira/vote',
  ];

  const adminProtectedRoutes = ['/pemira/admin/dashboard'];

  const authRoutes = ['/pemira', '/pemira/auth']; // user login
  const adminLoginRoute = '/pemira/admin/login';

  // ========= USER ACCESS CHECK ==========
  if (userProtectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isUserAuthenticated || !isAllowedJurusan) {
      const redirectUrl = new URL('/pemira/auth', request.url);
      redirectUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // ========= ADMIN ACCESS CHECK ==========
  if (adminProtectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAdminAuthenticated) {
      const redirectUrl = new URL('/pemira/admin/login', request.url);
      redirectUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // ========= BLOCK USER LOGIN PAGE IF SUDAH LOGIN ==========
  if (authRoutes.includes(pathname) && isUserAuthenticated) {
    return NextResponse.redirect(new URL('/pemira/auth/validate', request.url));
  }

  // ========= BLOCK ADMIN LOGIN PAGE IF SUDAH LOGIN ==========
  if (pathname === adminLoginRoute && isAdminAuthenticated) {
    return NextResponse.redirect(new URL('/pemira/admin/dashboard', request.url));
  }

  // ========= ALLOW ACCESS ==========
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}
