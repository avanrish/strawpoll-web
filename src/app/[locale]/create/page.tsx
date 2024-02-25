import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import pick from 'lodash/pick';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { PollContainer } from '@/src/components/PollContainer';
import { PollMaker } from '@/src/components/PollMaker/PollMaker';
import { Statistics } from '@/src/components/Hero/Statistics';
import { ExploreRankings } from '@/src/components/ExploreRankings';
import { HowItWorks } from '@/src/components/HowItWorks';
import { PollMakerFeatures } from '@/src/components/PollMakerFeatures';
import { HelpCenter } from '@/src/components/HelpCenter';
import { appUrl } from '@/src/utils/config/client';

export default function Create({
  params: { locale },
}: MetadataPropsWithLocale) {
  const t = useTranslations('Create');
  const messages = useMessages();

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto pt-10 pb-12 sm:px-4">
          <h1 className="text-gray-900 dark:text-gray-100 text-2xl text-center font-bold leading-7 sm:text-3xl">
            {t('title')}
          </h1>
          <h2 className="text-center text-sm mt-2 text-gray-500">
            {t('subtitle')}
          </h2>
          <PollContainer>
            <NextIntlClientProvider
              locale={locale}
              messages={pick(messages, 'PollMaker') as AbstractIntlMessages}
            >
              <PollMaker />
            </NextIntlClientProvider>
          </PollContainer>
        </div>
      </div>
      <Statistics />
      <HowItWorks />
      <PollMakerFeatures />
      <ExploreRankings variant="lighter" />
      <HelpCenter />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Create');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      siteName: t('metadata.siteName'),
    },
    metadataBase: new URL(appUrl),
  };
}
