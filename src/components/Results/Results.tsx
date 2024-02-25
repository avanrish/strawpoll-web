'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { ShareIcon } from '@heroicons/react/24/solid';
import { io } from 'socket.io-client';
import { SignalIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

import { Link } from '@/src/navigation';
import { ResultsProps } from '@/src/components/Results/Results.type';
import { pollOptionColors } from '@/src/utils/fixtures/poll-option-colors';
import { OptionResultBar } from '@/src/components/OptionResultBar';
import { PollOption } from '@/src/types/common';
import { PollChart } from '@/src/components/PollChart';

export function Results({ poll }: ResultsProps) {
  const t = useTranslations('PollResults.Results');
  const [options, setOptions] = useState(poll.options);

  const totalVotes = options.reduce((acc, option) => acc + option.count, 0);

  useEffect(() => {
    const socket = io('localhost:4000');
    socket.on('votes', (data: PollOption[]) => {
      setOptions(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="md:flex items-start pt-4">
        <div className="grow">
          {options.map((option, i) => {
            const percentage = Math.round(
              (option.count / (totalVotes || 1)) * 100
            );
            const color = pollOptionColors[i % pollOptionColors.length];
            return (
              <OptionResultBar
                key={option.id}
                option={option}
                percentage={percentage}
                color={color}
              />
            );
          })}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-gray-500 text-lg sm:text-base dark:text-rock-blue">
            <span>{t('totalVotes', { count: totalVotes })}</span>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="max-md:mt-8 md:ml-8 w-72 h-72 mx-auto">
            {totalVotes === 0 ? (
              <div className="rounded-full dark:border-gray-700 h-full border flex items-center justify-center text-center dark:bg-[#2A3441]">
                <span>{t('chartWillBeRendered')}</span>
              </div>
            ) : (
              <PollChart options={options} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:flex w-full">
        <div className="w-full sm:max-w-fit">
          <button className="btn primary text-sm w-full sm:px-8">
            <SignalIcon className="h-5 w-5 -ml-1 mr-2" />
            <span>{t('liveResults')}</span>
          </button>
        </div>
        <div className="flex space-x-4 sm:justify-between w-full">
          <Link
            href={`/${poll.publicId}`}
            className="btn text-sm border border-gray-200 max-sm:grow dark:border-gray-700 dark:bg-gray-700/50 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
          >
            <ArrowLeftIcon className="h-5 w-5 -ml-1 mr-2" />
            <span>{t('backToPoll')}</span>
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
}
