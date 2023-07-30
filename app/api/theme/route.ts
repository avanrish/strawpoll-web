import { NextRequest, NextResponse } from 'next/server';
import { themeCookieKey } from '@/src/utils/fixtures/config';

export async function GET(request: NextRequest) {
  const theme = request.nextUrl.searchParams.get(themeCookieKey);
  const response = new NextResponse(null);
  if (!theme)
    return NextResponse.json(`Query param missing: ${themeCookieKey}`, {
      status: 400,
    });
  response.cookies.set(themeCookieKey, theme);
  return response;
}
