'use client';
import { FormEvent } from 'react';

import { TextBox } from '@/src/components/TextBox';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export const PollMaker = () => {
  const t = useTranslations('PollMaker');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit!');
  };

  const addOption = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Add option!');
  };

  return (
    <form onSubmit={submit}>
      <TextBox
        label={t('pollTitle.label')}
        placeholder={t('pollTitle.placeholder')}
        sizeVariant="large"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-6 space-y-1 pb-6">
          <p className="label">{t('answers.label')}</p>
          <div className="space-y-2">
            <TextBox
              placeholder={t('answers.option', { number: 1 })}
              sizeVariant="medium"
            />
            <TextBox
              placeholder={t('answers.option', { number: 2 })}
              sizeVariant="medium"
            />
            <button
              className="btn border border-gray-300 rounded-md max-sm:w-full font-medium text-sm flex items-center hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-600"
              onClick={addOption}
            >
              <PlusIcon className="text-gray-400 w-5 h-5 -ml-2 mr-1" />
              <span className="sm:hidden">{t('answers.addAnswer.long')}</span>
              <span className="max-sm:hidden">
                {t('answers.addAnswer.short')}
              </span>
            </button>
          </div>
        </div>
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <button className="btn primary text-sm w-full">
            {t('createPoll')}
          </button>
        </div>
      </div>
    </form>
  );
};
