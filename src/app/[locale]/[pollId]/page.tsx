import { Metadata } from 'next';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import pick from 'lodash/pick';
import { notFound } from 'next/navigation';
import { formatDistanceToNowStrict } from 'date-fns';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

import { PollContainer } from '@/src/components/PollContainer';
import { VoteForm } from '@/src/components/VoteForm';
import { getPoll } from '@/src/services/getPoll';
import { VotePageProps } from '@/src/types/pages';
import { getNotFoundMetadata } from '@/src/services/getNotFoundMetadata';
import { localeToDateFnsLocale } from '@/src/utils/fixtures/localeToDateFnsLocale';
import { appUrl } from '@/src/utils/config/client';

export default async function PollVote({
  params: { locale, pollId },
}: VotePageProps) {
  const poll = await getPoll(pollId);
  if (!poll) notFound();
  const t = await getTranslations('VotePage');
  const messages = await getMessages();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-10 pb-12 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <PollContainer withoutMargin>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-900 dark:text-gray-200 font-semibold">
              {poll.title}
            </p>
            <div className="w-8 h-8 rounded-full flex items-center justify-center -mr-2 focus:border border-gray-200 focus:ring-2 ring-indigo-600 dark:ring-indigo-500 ring-offset-2 dark:text-rock-blue dark:bg-gray-700/50">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </div>
          </div>
          <p className="flex items-center mt-1 text-gray-500 dark:text-rock-blue">
            <span>{t('byGuest')}</span>
            <span className="mx-1">·</span>
            <span>
              {formatDistanceToNowStrict(poll.createdAt, {
                locale: localeToDateFnsLocale(locale),
                addSuffix: true,
              })}
            </span>
          </p>
          <div className="mt-8 text-gray-500 dark:text-rock-blue">
            <div>{t('makeAChoice')}</div>
            <NextIntlClientProvider
              locale={locale}
              messages={pick(messages, 'VoteForm') as AbstractIntlMessages}
            >
              <VoteForm poll={poll} />
            </NextIntlClientProvider>
          </div>
        </PollContainer>
        <div className="flex items-center justify-center mt-8 text-gray-500 dark:text-rock-blue">
          <LockClosedIcon className="h-4 w-4 -ml-1 mr-2 " />
          <span className="text-sm">{t('oneVotePerIP')}</span>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: { pollId },
}: VotePageProps): Promise<Metadata> {
  const poll = await getPoll(pollId);
  if (!poll) return getNotFoundMetadata();
  const t = await getTranslations('VotePage');

  const options = poll.options
    .slice(0, 3)
    .map((o) => o.title)
    .join(', ');

  return {
    title: t('title', { title: poll.title }),
    description: t('description', { options }),
    openGraph: {
      title: t('title', { title: poll.title }),
      description: t('description', { options }),
    },
    metadataBase: new URL(appUrl),
  };
}
