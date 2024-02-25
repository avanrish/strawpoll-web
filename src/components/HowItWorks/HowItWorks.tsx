import { useMessages, useTranslations } from 'next-intl';

import { PollMakerStep } from '@/src/components/HowItWorks/PollMakerStep';

export const HowItWorks = () => {
  const t = useTranslations('HowItWorks');
  const messages = useMessages() as unknown as IntlMessages;

  const { steps } = messages?.HowItWorks ?? { steps: [] };

  return (
    <div className="bg-white dark:bg-gray-800 pt-16 sm:pt-24 lg:pt-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
        <div className="text-center">
          <h2 className="uppercase font-semibold tracking-wider text-indigo-600 dark:text-indigo-500">
            {t('subtitle')}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
            {t('title')}
          </p>
          <p className="mt-5 text-xl text-gray-500 max-w-prose mx-auto">
            {t('description')}
          </p>
        </div>
        <div className="mt-12 max-sm:space-y-6 sm:grid sm:grid-cols-3 sm:gap-8">
          {steps?.map(({ step, title, description }) => (
            <PollMakerStep
              key={step}
              step={step}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
