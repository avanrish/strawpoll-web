import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { footerLinks } from '@/src/utils/fixtures/footerLinks';

export const Links = () => {
  const t = useTranslations('Footer');

  return (
    <div className="max-xl:mt-12 grid grid-cols-2 gap-8 col-span-2">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
            {t('categories.solutions')}
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerLinks.solutions.map(({ key, url }) => (
              <li key={key}>
                <Link
                  className='className="text-base text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 aria-disabled:opacity-50 aria-disabled:pointer-events-none'
                  href={url}
                  aria-disabled
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
            {t('categories.support')}
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerLinks.support.map(({ key, url }) => (
              <li key={key}>
                <Link
                  className='className="text-base text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 aria-disabled:opacity-50 aria-disabled:pointer-events-none'
                  href={url}
                  aria-disabled
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
            {t('categories.company')}
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerLinks.company.map(({ key, url }) => (
              <li key={key}>
                <Link
                  className='className="text-base text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 aria-disabled:opacity-50 aria-disabled:pointer-events-none'
                  href={url}
                  aria-disabled
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase">
            {t('categories.legal')}
          </h3>
          <ul role="list" className="mt-4 space-y-4">
            {footerLinks.legal.map(({ key, url }) => (
              <li key={key}>
                <Link
                  className='className="text-base text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 aria-disabled:opacity-50 aria-disabled:pointer-events-none'
                  href={url}
                  aria-disabled
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
