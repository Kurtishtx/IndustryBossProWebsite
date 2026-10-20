import { NextResponse, type NextRequest } from 'next/server';
import REDIRECTS from './lib/redirects.json';

/* Permanent (301) redirects for the ~1,470 blog posts and hub pages removed when the blog was cut from 50
   near-duplicate categories to one per service (see src/lib/blog/index.ts). Each old URL points at its
   closest surviving page; categories for trades IndustryBossPro doesn't serve go to that trade's own app
   site. A 301 passes the old page's search credit on to the new one. Never remove an entry. */
const MAP = REDIRECTS as Record<string, string>;

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  const dest = MAP[path];
  if (!dest) return NextResponse.next();
  const url = /^https?:\/\//.test(dest) ? dest : new URL(dest, request.nextUrl.origin).toString();
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/blog/:path*', '/:slug'],
};
