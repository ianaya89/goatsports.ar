import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const localizedOgImage = new RegExp(`^/(${routing.locales.join('|')})/(.*/)?opengraph-image$`);

export default function middleware(request: NextRequest) {
  // Metadata emits og:image as /es/...; serve it directly instead of redirecting to the unprefixed URL
  if (localizedOgImage.test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!api|_next|_vercel|images|.*\\..*).*)'
  ]
};
