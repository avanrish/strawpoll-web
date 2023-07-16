import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { additionalMobileMenuLinks } from '@/src/utils/fixtures/navLinks';

export function MobileLowerSection() {
  const t = useTranslations('Header');

  return (
    <div className="px-5 py-6 space-y-6">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {additionalMobileMenuLinks.map(({ link, i18nKey, disabled }) => (
          <Link
            className="text-neutral font-medium hover:text-base-300 aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={link}
            key={i18nKey}
            aria-disabled={disabled}
          >
            {t(i18nKey)}
          </Link>
        ))}
      </div>
      <Link
        href="#"
        className="btn font-medium w-full text-white bg-indigo-500 hover:bg-indigo-600 aria-disabled:pointer-events-none aria-disabled:opacity-50"
        aria-disabled
      >
        {t('signUp')}
      </Link>
      <div className="text-center font-medium">
        {t.rich('existingUser', {
          link: (chunks) => (
            <Link
              href="#"
              className="text-primary hover:text-indigo-500 aria-disabled:pointer-events-none aria-disabled:opacity-50"
              aria-disabled
            >
              {chunks}
            </Link>
          ),
        })}
      </div>
    </div>
  );
}
