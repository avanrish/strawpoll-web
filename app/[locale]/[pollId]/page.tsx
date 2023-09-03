import { Metadata } from 'next';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import pick from 'lodash/pick';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { appUrl } from '@/src/utils/fixtures/config';
import { PollContainer } from '@/src/components/PollContainer';
import { VoteForm } from '@/src/components/VoteForm';

export default function PollVote({
  params: { locale },
}: MetadataPropsWithLocale) {
  // TODO: if not found use notFound() from next/navigation and set metadata
  // TODO: Translate it
  // TODO: use proper poll data

  const messages = useMessages();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-10 pb-12 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <PollContainer withoutMargin>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-900 dark:text-gray-200 font-semibold">
              asd
            </p>
            <div className="w-8 h-8 rounded-full flex items-center justify-center -mr-2 focus:border border-gray-200 focus:ring-2 ring-indigo-600 dark:ring-indigo-500 ring-offset-2 dark:text-rock-blue dark:bg-gray-700/50">
              <EllipsisVerticalIcon className="w-6 h-6" />
            </div>
          </div>
          <p className="flex items-center mt-1 text-gray-500 dark:text-rock-blue">
            <span>by a guest</span>
            <span className="mx-1">·</span>
            <span>19 minutes ago</span>
          </p>
          <div className="mt-8 text-gray-500 dark:text-rock-blue">
            <div>Make a choice:</div>
            <NextIntlClientProvider
              locale={locale}
              messages={pick(messages, 'VoteForm') as AbstractIntlMessages}
            >
              <VoteForm />
            </NextIntlClientProvider>
          </div>
        </PollContainer>
        <div className="flex items-center justify-center mt-8 text-gray-500 dark:text-rock-blue">
          <LockClosedIcon className="h-4 w-4 -ml-1 mr-2 " />
          <span className="text-sm">One vote per IP-Address allowed.</span>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: MetadataPropsWithLocale): Promise<Metadata> {
  // TODO: Use translations
  // TODO: Use poll data
  // TODO: handle not found
  // const t = await getTranslator(locale, 'Poll');

  return {
    title: '{Test} - Online Poll - StrawPoll.com',
    description: "What's your opinion? Vote now: {Abcd}...",
    openGraph: {
      title: '{Test} - Online Poll - StrawPoll.com',
      description: "What's your opinion? Vote now: {Abcd}...",
    },
    metadataBase: new URL(appUrl),
  };
}
