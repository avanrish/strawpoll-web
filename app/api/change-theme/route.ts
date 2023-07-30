import { NextRequest, NextResponse } from 'next/server';
import { themeCookieKey } from '@/src/utils/fixtures/config';

export async function GET(request: NextRequest) {
  const theme = request.nextUrl.searchParams.get(themeCookieKey);
  const response = new NextResponse(null);
  if (!theme)
    return NextResponse.json(
      {
        statusCode: 400,
        message: `Required parameter missing: ${themeCookieKey}`,
      },
      {
        status: 400,
      }
    );
  response.cookies.set(themeCookieKey, theme, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10),
  });
  return response;
}
