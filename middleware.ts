import createMiddleware from 'next-intl/middleware';

import { Locales } from '@/src/utils/enums/locales';

export default createMiddleware({
  locales: Object.values(Locales),
  defaultLocale: Locales.English,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
