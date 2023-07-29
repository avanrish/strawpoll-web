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
            className="text-gray-900 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-gray-200 aria-disabled:pointer-events-none aria-disabled:opacity-50"
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
        className="btn secondary w-full text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
        aria-disabled
      >
        {t('signUp')}
      </Link>
      <div className="text-center font-medium text-gray-500">
        {t.rich('existingUser', {
          link: (chunks) => (
            <Link
              href="#"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500 aria-disabled:pointer-events-none aria-disabled:opacity-50"
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
