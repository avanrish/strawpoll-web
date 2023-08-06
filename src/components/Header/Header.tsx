import Link from 'next-intl/link';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useLocale,
  useMessages,
} from 'next-intl';
import pick from 'lodash/pick';

import { Logo } from '@/src/components/Logo';
import { Routes } from '@/src/utils/enums/routes';
import { MobileMenu } from '@/src/components/Header/MobileMenu';
import { DesktopMenu } from '@/src/components/Header/DesktopMenu';

export const Header = () => {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <header className="sticky top-0 z-[1] w-full ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex items-center relative h-16">
        <div className="px-2 lg:px-0">
          <Link href={Routes.Home}>
            <Logo className="text-gray-900 dark:text-white h-6" />
          </Link>
        </div>
        <NextIntlClientProvider
          locale={locale}
          messages={pick(messages, 'Header') as AbstractIntlMessages}
        >
          <MobileMenu />
        </NextIntlClientProvider>
        <DesktopMenu />
      </div>
    </header>
  );
};
