import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { env, isSupabaseConfigured } from "@/lib/config";

const protectedPrefixes = ["/uebersicht", "/inserieren", "/tierbetreuer/neu", "/anfragen"];
const authPrefixes = ["/einloggen", "/registrieren", "/passwort-vergessen", "/passwort-aktualisieren"];

const umlautPathRedirects: Record<string, string> = {
  "/übersicht": "/uebersicht",
  "/über-uns": "/ueber-uns",
  "/authentifizierung/rückruf": "/authentifizierung/rueckruf",
};

function decodePathname(pathname: string) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

export async function updateSession(request: NextRequest) {
  const decodedPathname = decodePathname(request.nextUrl.pathname);
  const redirectPath = umlautPathRedirects[decodedPathname];

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

  const pathname = decodedPathname;
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
