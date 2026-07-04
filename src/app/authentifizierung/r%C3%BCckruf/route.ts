import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/authentifizierung/rueckruf";
  return NextResponse.redirect(url, 308);
}
