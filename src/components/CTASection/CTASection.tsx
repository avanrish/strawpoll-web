import { useTranslations } from 'next-intl';

import { Routes } from '@/src/utils/enums/routes';
import { Link } from '@/src/navigation';

export const CTASection = () => {
  const t = useTranslations('CTASection');

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 dark:from-gray-700 dark:to-gray-700">
      <div className="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8 lg:max-w-7xl lg:items-center">
        <h3 className="text-4xl font-extrabold tracking-tight">
          <span className="block text-white dark:text-gray-200">
            {t('title.part1')}
          </span>
          <span className="text-indigo-400 block">{t('title.part2')}</span>
        </h3>
        <div className="mt-6 flex max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <Link
            className="btn py-3 text-indigo-800 bg-indigo-50 hover:bg-indigo-100 sm:w-fit"
            href={Routes.CREATE_POLL}
          >
            {t('links.createPoll')}
          </Link>
          <Link
            className="btn py-3 text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:w-fit sm:px-8 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
            href="#"
            aria-disabled
          >
            {t('links.signUp')}
          </Link>
        </div>
      </div>
    </div>
  );
};
