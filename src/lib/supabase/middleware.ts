import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { env, isSupabaseConfigured } from "@/lib/config";

const protectedPrefixes = ["/uebersicht", "/inserieren/gesuch", "/tierbetreuer/neu", "/anfragen"];
const authPrefixes = ["/einloggen", "/registrieren", "/passwort-vergessen", "/passwort-aktualisieren"];

const encodedPathRedirects: Record<string, string> = {
  "/%c3%bcbersicht": "/uebersicht",
  "/%c3%bcber-uns": "/ueber-uns",
  "/authentifizierung/r%c3%bcckruf": "/authentifizierung/rueckruf",
};

function decodePathname(pathname: string) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function encodedPathKey(pathname: string) {
  return encodeURI(decodePathname(pathname)).toLowerCase();
}

export async function updateSession(request: NextRequest) {
  const redirectPath = encodedPathRedirects[encodedPathKey(request.nextUrl.pathname)];

  if (redirectPath) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = redirectPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (!isSupabaseConfigured || !env.supabaseUrl || !env.supabaseAnonKey) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(env.supabaseUrl, env.supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isProtected = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
  const isAuthPage = authPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (!user && isProtected) {
    const url = request.nextUrl.clone();
    url.pathname = "/einloggen";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (user && isAuthPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/uebersicht";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}
