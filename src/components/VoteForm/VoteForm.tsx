'use client';

import {
  ArrowRightIcon,
  ChartBarIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Link } from '@/src/navigation';
import { Radio } from '@/src/components/Radio';
import { VoteFormProps } from '@/src/components/VoteForm/VoteForm.type';
import { PollType } from '@/src/utils/enums/pollType';
import { VoteSuccessModal } from '@/src/components/VoteSuccessModal';
import { vote } from '@/src/services/api/vote';
import { ErrorMessage } from '@/src/components/ErrorMessage';

export const VoteForm = ({ poll }: VoteFormProps) => {
  const t = useTranslations('VoteForm');
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    errors: {} as { [key: string]: any },
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);

  const { errors } = requestStatus;
  const errorMessage = errors?.general || errors?.optionIds || errors?.poll;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, optionId: number) => {
    const { target } = e;
    if (poll.type === PollType.SINGLE_CHOICE) {
      setSelectedOptionIds([optionId]);
      return;
    }
    if (target.checked) {
      setSelectedOptionIds([...selectedOptionIds, optionId]);
      return;
    }
    setSelectedOptionIds((prev) => prev.filter((id) => id !== optionId));
  };

  const castVote = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestStatus({ errors: {}, loading: true });
    const result = await vote(poll.publicId, selectedOptionIds);
    if (result.success) {
      setIsSuccessModalOpen(true);
      setRequestStatus({ errors: {}, loading: false });
    } else {
      setRequestStatus({ errors: result.data, loading: false });
    }
  };

  return (
    <>
      <form onSubmit={castVote}>
        <div className="mt-4 space-y-3">
          {poll.options.map((option) => (
            <Radio
              key={option.id}
              name="options"
              value={option.id}
              label={option.title}
              checked={selectedOptionIds.includes(option.id)}
              onChange={(e) => handleChange(e, option.id)}
            />
          ))}
        </div>
        {errorMessage && (
          <div className="mt-6">
            <ErrorMessage text={t(errorMessage)} />
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:flex">
          <div>
            <button
              className="btn primary text-sm w-full sm:px-8 disabled:opacity-50 disabled:pointer-events-none"
              disabled={requestStatus.loading}
            >
              {!requestStatus.loading ? (
                <>
                  <span>{t('vote')}</span>
                  <ArrowRightIcon className="w-5 h-5 hidden sm:block ml-2" />
                </>
              ) : (
                t('validatingVote')
              )}
            </button>
          </div>
          <div className="flex space-x-4 sm:justify-between w-full">
            <Link
              href={`/${poll.publicId}/results`}
              className="btn text-sm border border-gray-200 max-sm:grow dark:border-gray-700 dark:bg-gray-700/50 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
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
      </form>
      <VoteSuccessModal
        open={isSuccessModalOpen}
        setOpen={setIsSuccessModalOpen}
        publicId={poll.publicId}
      />
    </>
  );
};
