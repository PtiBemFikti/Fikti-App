import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAdminSessionToken } from '@/lib/admin-session-core';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isApiRequest = pathname.startsWith('/api');

  // USER cookies
  const moodleSession = request.cookies.get('MoodleSession')?.value;
  const jurusan = request.cookies.get('user_jurusan')?.value;

  const isAllowedJurusan =
    jurusan?.includes('Sistem Informasi') || jurusan?.includes('Sistem Komputer');

  // ADMIN cookies
  const adminSession = request.cookies.get('pemira_admin_session')?.value;
  const isAdminAuthenticated = Boolean(
    await verifyAdminSessionToken(adminSession)
  );

  // ROUTES
  const userProtectedRoutes = [
    '/pemira/auth/validate',
    '/pemira/profile',
    '/pemira/profile/vote',
    '/pemira/profile/voter-data',
    '/pemira/vote',
  ];

  const adminProtectedRoutes = ['/pemira/admin/dashboard', '/pemira/admin/candidates'];

  const adminLoginRoute = '/pemira/admin/login';

  // ========= USER ACCESS CHECK ==========
  if (userProtectedRoutes.some((route) => pathname.startsWith(route))) {
    const isValidationRoute = pathname.startsWith('/pemira/auth/validate');
    const hasProfileAccess = isValidationRoute
      ? Boolean(moodleSession)
      : Boolean(moodleSession) && Boolean(isAllowedJurusan);

    if (!hasProfileAccess) {
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
