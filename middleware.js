import { NextResponse } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "./lib/site";

// "/" → "/es" o "/en": respeta la elección guardada y, si no hay, el idioma del navegador.
export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const saved = req.cookies.get("lang")?.value;
  const accept = req.headers.get("accept-language") || "";
  const browser = accept.split(",").map((s) => s.trim().slice(0, 2).toLowerCase()).find((c) => LOCALES.includes(c));
  const lang = LOCALES.includes(saved) ? saved : browser || DEFAULT_LOCALE;
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|strategic|favicon.ico|apple-touch-icon.png|og.jpg|sitemap.xml|robots.txt).*)"],
};
