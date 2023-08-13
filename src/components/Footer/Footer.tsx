import { cookies } from 'next/headers';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useLocale,
  useTranslations,
  useMessages,
} from 'next-intl';
import pick from 'lodash/pick';

import { Logo } from '@/src/components/Logo';
import { ThemeSwitch } from '@/src/components/ThemeSwitch';
import { themeCookieKey } from '@/src/utils/fixtures/config';
import { Themes } from '@/src/utils/enums/themes';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { LanguageChange } from '@/src/components/Footer/LanguageChange';
import { Links } from '@/src/components/Footer/Links';

export const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const messages = useMessages();

  const theme = cookies().get(themeCookieKey);

  return (
    <footer className="border-t border-gray-700 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-md pt-12 px-4 sm:px-6 sm:max-w-7xl lg:pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo
              className="h-6 text-gray-500 dark:text-gray-400"
              uniformColor
            />
            <p className="text-gray-600 dark:text-gray-400">
              {t('description')}
            </p>
            <ThemeSwitch defaultEnabled={theme?.value === Themes.Dark} />
            <div className="flex space-x-2 items-center">
              <GlobeAltIcon className="h-8 text-gray-600 dark:text-gray-400" />
              <NextIntlClientProvider
                locale={locale}
                messages={
                  pick(messages, 'Footer.languages') as AbstractIntlMessages
                }
              >
                <LanguageChange />
              </NextIntlClientProvider>
            </div>
          </div>
          <Links />
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-600 py-8">
          <p className="text-gray-600 dark:text-gray-400 text-center">
            {t.rich('legalInfo', {
              link: (chunks) => (
                <a href="https://strawpoll.com" className="underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
