import { getTranslator } from 'next-intl/server';
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';

import { navLinks } from '@/src/utils/fixtures/navLinks';
import { NavigationLink } from '@/src/components/Header/NavigationLink';

export const DesktopMenu = async () => {
  const locale = useLocale();
  const t = await getTranslator(locale, 'Header');

  return (
    <div className="hidden lg:flex lg:w-full ml-8 justify-between h-full">
      <div className="flex space-x-8">
        {navLinks.map(({ i18nKey, link, disabled }) => (
          <NavigationLink
            key={i18nKey}
            link={link}
            text={t(i18nKey)}
            disabled={disabled}
            isMobile={false}
          />
        ))}
      </div>
      <div className="flex items-center ml-auto text-sm space-x-3">
        <Link
          href="#"
          className="font-medium px-4 aria-disabled:pointer-events-none aria-disabled:opacity-50"
          aria-disabled
        >
          {t('login')}
        </Link>
        <Link
          href="#"
          className="btn btn-primary !text-sm !font-medium aria-disabled:pointer-events-none aria-disabled:opacity-50"
          aria-disabled
        >
          {t('signUp')}
        </Link>
      </div>
    </div>
  );
};
