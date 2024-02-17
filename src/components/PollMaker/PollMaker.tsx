'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import { nanoid } from 'nanoid';
import { PlusIcon } from '@heroicons/react/24/outline';

import { TextBox } from '@/src/components/TextBox';
import { api } from '@/src/utils/axios';
import { PollType } from '@/src/utils/enums/pollType';
import { ErrorMessage } from '@/src/components/ErrorMessage';
import { LoadingSpinner } from '@/src/components/LoadingSpinner';
import { ApiResult, Poll } from '@/src/types/common';
import { useRouter } from '@/src/navigation';

export const PollMaker = () => {
  const [pollTitle, setPollTitle] = useState('');
  const [options, setOptions] = useState([
    { key: nanoid(12), value: '' },
    { key: nanoid(12), value: '' },
  ]);
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    errors: {} as { [key: string]: any },
  });
  const t = useTranslations('PollMaker');
  const router = useRouter();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestStatus({ errors: {}, loading: true });
    try {
      const { data } = await api.post<ApiResult<Poll>>('/polls', {
        title: pollTitle,
        type: PollType.SINGLE_CHOICE,
        options: options.map((option) => option.value),
      });
      router.push(`/${data.result.publicId}`);
    } catch (err: any) {
      const errors: {
        [key: string]: any;
      } = {};
      if (err.response.status !== 400) errors.general = 'errors.unknown';
      else {
        for (const error of err.response.data.message) {
          errors[error.split('.')[0]] = ['errors', error].join('.');
        }
      }
      setRequestStatus({ errors, loading: false });
    }
  };

  const addOption = () => {
    setOptions((prev) => [...prev, { key: nanoid(12), value: '' }]);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPollTitle(e.target.value);
  };

  const handleOptionChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setOptions((prev) =>
      prev.map((option) =>
        option.key === key ? { ...option, value: e.target.value } : option
      )
    );
  };

  return (
    <form onSubmit={submit}>
      <TextBox
        label={t('pollTitle.label')}
        placeholder={t('pollTitle.placeholder')}
        sizeVariant="large"
        onChange={handleTitleChange}
        value={pollTitle}
        error={
          requestStatus?.errors?.title ? t(requestStatus.errors?.title) : ''
        }
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mt-6 space-y-1 pb-6">
          <p className="label">{t('answers.label')}</p>
          <div className="space-y-2">
            {options.map(({ key, value }) => (
              <TextBox
                key={key}
                placeholder={t('answers.option', { number: 1 })}
                sizeVariant="medium"
                value={value}
                onChange={(e) => handleOptionChange(e, key)}
              />
            ))}
            <button
              className="btn border border-gray-300 rounded-md max-sm:w-full font-medium text-sm flex items-center hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-600"
              onClick={addOption}
              type="button"
            >
              <PlusIcon className="text-gray-400 w-5 h-5 -ml-2 mr-1" />
              <span className="sm:hidden">{t('answers.addAnswer.long')}</span>
              <span className="max-sm:hidden">
                {t('answers.addAnswer.short')}
              </span>
            </button>
          </div>
        </div>
        <div className="pt-6">
          {(requestStatus?.errors?.general ||
            requestStatus?.errors?.options) && (
            <ErrorMessage
              text={t(
                requestStatus?.errors?.general || requestStatus?.errors?.options
              )}
            />
          )}
          <div className="grid grid-cols-1 gap-6">
            <button
              className="btn primary text-sm w-full"
              disabled={requestStatus.loading}
            >
              {!requestStatus.loading ? t('createPoll') : <LoadingSpinner />}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
