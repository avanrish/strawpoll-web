import { Metadata } from 'next';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { appUrl } from '@/src/utils/fixtures/config';
import { PollContainer } from '@/src/components/PollContainer';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

export default function PollVote() {
  // TODO: if not found use notFound() from next/navigation and set metadata
  // TODO: Translate it and use proper poll data

  return (
    <div className="pt-10 pb-12">
      <PollContainer withoutMargin>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-gray-900 font-semibold">asd</p>
          <div className="w-8 h-8 rounded-full flex items-center justify-center -mr-2 focus:border border-gray-200 focus:ring-2 ring-indigo-600 ring-offset-2 ">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </div>
        </div>
        <p className="flex items-center mt-1 text-gray-500">
          <span>by a guest</span>
          <span className="mx-1">·</span>
          <span>19 minutes ago</span>
        </p>
        <div className="mt-8 text-gray-500">
          <div>Make a choice:</div>
          <div className="mt-4 space-y-3">
            <label className="flex items-center px-2.5 py-3 border border-gray-200 rounded-md">
              <input type="radio" className="min-w-[1.25rem] h-5 mr-2.5" />
              <span className="text-lg truncate">zxc</span>
            </label>
            <label className="flex items-center px-2.5 py-3 border border-gray-200 rounded-md">
              <input type="radio" className="min-w-[1.25rem] h-5 mr-2.5" />
              <span className="text-lg truncate">cxz</span>
            </label>
          </div>
        </div>
      </PollContainer>
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: MetadataPropsWithLocale): Promise<Metadata> {
  // TODO: Use translations + proper poll data
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
