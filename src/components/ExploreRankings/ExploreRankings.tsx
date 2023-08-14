import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

import { popularCategories } from '@/src/utils/fixtures/popularCategories';

export const ExploreRankings = () => {
  const t = useTranslations('ExploreRankings');

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="py-16 px-4 mx-auto max-w-4xl sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-4xl text-gray-900 dark:text-gray-200 font-extrabold tracking-tight">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-500 font-medium mt-1 tracking-tighter">
          {t('description')}
        </p>
        <Link
          href="#"
          className="btn primary mt-6 text-sm aria-disabled:opacity-50 aria-disabled:pointer-events-none"
          aria-disabled
        >
          {t('linkLabel')}
        </Link>
        <div className="mt-6">
          <div className="">
            <span className="text-gray-600 dark:text-gray-400">
              {`${t('explorePopularCategories')}: `}
            </span>
            {popularCategories.map(({ key, url, disabled }, i) => (
              <Fragment key={key}>
                <Link
                  href={url}
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-500 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                  aria-disabled={disabled}
                >
                  {t(key)}
                </Link>
                {i < popularCategories.length - 1 && (
                  <span className="text-gray-600"> · </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
