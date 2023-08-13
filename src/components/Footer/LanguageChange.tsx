'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

import { Locales } from '@/src/utils/enums/locales';

export const LanguageChange = () => {
  const t = useTranslations('Footer');
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      value={currentLocale}
      onChange={({ target }) =>
        router.replace(pathname, { locale: target.value })
      }
      className="border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 grow text-gray-600 sm:text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
    >
      {Object.values(Locales).map((lang) => (
        <option key={lang} value={lang}>
          {t(`languages.${lang}`)}
        </option>
      ))}
    </select>
  );
};
