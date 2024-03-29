import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

import { Locales } from '@/src/utils/enums/locales';
import { localePrefix, locales } from '@/src/navigation';

export function generateCsp() {
  const nonce = crypto.randomUUID();

  const csp = [
    { name: 'default-src', values: ["'self'"] },
    {
      name: 'script-src',
      values: [
        "'report-sample'",
        "'self'",
        `'nonce-${nonce}'`,
        ...(process.env.APP_ENV === 'production' ? [] : ["'unsafe-eval'"]),
      ],
    },
    {
      name: 'style-src',
      values: ["'report-sample'", "'self'", "'unsafe-inline'"],
    },
    {
      name: `connect-src`,
      values: [
        "'self'",
        new URL(`${process.env.NEXT_PUBLIC_API_URL}`).host,
        `ws://${new URL(`${process.env.NEXT_PUBLIC_API_URL}`).host}`,
      ],
    },
    { name: 'font-src', values: ["'self'", 'data:'] },
    { name: 'img-src', values: ["'self'", 'data:'] },
    { name: 'worker-src', values: ["'self'", 'blob:'] },
    { name: 'frame-ancestors', values: ["'none'"] },
    { name: 'form-action', values: ["'self'"] },
  ];

  const cspString = csp
    .map((directive) => {
      return `${directive.name} ${directive.values.join(' ')}`;
    })
    .join('; ');

  return { csp: cspString, nonce };
}

export default async function middleware(request: NextRequest) {
  const { csp } = generateCsp();
  const cspKey = 'Content-Security-Policy';
  request.headers.set(cspKey, csp);

  const defaultLocale = Locales.ENGLISH;
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
  });
  const response = handleI18nRouting(request);

  response.headers.set('x-default-locale', defaultLocale);
  response.headers.set(cspKey, csp);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
