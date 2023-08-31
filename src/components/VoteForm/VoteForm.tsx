'use client';

import Link from 'next-intl/link';
import {
  ArrowSmallRightIcon,
  ChartBarIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';

import { Radio } from '@/src/components/Radio';
import { useTranslations } from 'next-intl';

export const VoteForm = () => {
  const t = useTranslations('VoteForm');

  return (
    <>
      <div className="mt-4 space-y-3">
        <Radio
          name="options"
          value="1"
          label="zxc"
          checked
          onChange={() => null}
        />
        <Radio
          name="options"
          value="2"
          label="cxz"
          checked={false}
          onChange={() => null}
        />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:flex">
        <div>
          <button
            className="btn primary text-sm w-full sm:px-8 disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <span>{t('vote')}</span>
            <ArrowSmallRightIcon className="w-5 h-5 hidden sm:block ml-2" />
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
