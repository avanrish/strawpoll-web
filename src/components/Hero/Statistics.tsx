import { useTranslations } from 'next-intl';

import { Statistic } from '@/src/components/Hero/Statistic';
import { heroStatistics } from '@/src/utils/fixtures/heroStatistics';

export const Statistics = () => {
  const t = useTranslations('Hero.Stats');

  return (
    <div className="px-4 pt-12 pb-16 text-gray-500 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8">
      <p className="text-sm uppercase font-semibold text-center tracking-wide">
        {t('title')}
      </p>
      <div className="mt-6 sm:px-6">
        <div className="max-w-3xl mx-auto sm:grid sm:grid-cols-3 sm:divide-x sm:divide-gray-300 dark:sm:divide-gray-700">
          {heroStatistics.map(({ label, value }) => (
            <Statistic key={label} label={t(label)} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};
