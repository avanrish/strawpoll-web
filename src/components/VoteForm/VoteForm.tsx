'use client';

import {
  ArrowRightIcon,
  ChartBarIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

import { Link } from '@/src/navigation';
import { Radio } from '@/src/components/Radio';
import { VoteFormProps } from '@/src/components/VoteForm/VoteForm.type';

export const VoteForm = ({ poll }: VoteFormProps) => {
  const t = useTranslations('VoteForm');

  return (
    <>
      <div className="mt-4 space-y-3">
        {poll.options.map((option) => (
          <Radio
            key={option.id}
            name="options"
            value={option.id}
            label={option.title}
            checked={false}
            onChange={() => null}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:flex">
        <div>
          <button
            className="btn primary text-sm w-full sm:px-8 disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <span>{t('vote')}</span>
            <ArrowRightIcon className="w-5 h-5 hidden sm:block ml-2" />
          </button>
        </div>
        <div className="flex space-x-4 sm:justify-between w-full">
          <Link
            href="#"
            className="btn text-sm border border-gray-200 max-sm:grow dark:border-gray-700 dark:bg-gray-700/50 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
            aria-disabled
          >
            <ChartBarIcon className="h-5 w-5 -ml-1 mr-2" />
            <span className="sm:hidden">{t('results')}</span>
            <span className="hidden sm:block">{t('showResults')}</span>
          </Link>
          <button
            className="btn text-sm border border-gray-200 max-sm:grow sm:w-40 dark:border-gray-700 dark:bg-gray-700/50 disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <ShareIcon className="h-5 w-5 -ml-1 mr-2" />
            <span>{t('share')}</span>
          </button>
        </div>
      </div>
    </>
  );
};
