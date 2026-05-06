import { NextRequest, NextResponse } from 'next/server'

const PROTECTED = ['/admin']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PROTECTED.some(p => pathname.startsWith(p))) {
    const token = request.cookies.get('token')?.value
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
