import { NextResponse, NextRequest } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";
import { fallbackLng, locales } from "./i18n/settings";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  // === multi lan ===
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    // e.g. incoming req is /en/about
    // The new URL is now /about
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        req.url
      )
    );
  }
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming req is /about
    // Tell Next.js it should pretend it's /en/about
    return NextResponse.rewrite(
      new URL(`/${fallbackLng}${pathname}`, req.url)
    );
  }
  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/profile/:path*",
    "/((?!api|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
  ],
};
