import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["id", "en"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 👉 Biarkan static assets lewat
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  // 👉 Jika URL sudah pakai locale, lanjut
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) return;

  // 👉 Default redirect ke /id
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname}`;

  return NextResponse.redirect(url);
}
