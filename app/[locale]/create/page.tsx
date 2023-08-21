import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { appUrl } from '@/src/utils/fixtures/config';
import { PollContainer } from '@/src/components/PollContainer';
import { TextBox } from '@/src/components/TextBox';

export default function Create() {
  const t = useTranslations('Create');

  return (
    <>
      <div className="max-w-3xl mx-auto pt-10 pb-12 sm:px-4 bg-gray-100">
        <h1 className="text-gray-900 text-2xl text-center font-bold leading-7">
          {t('title')}
        </h1>
        <h2 className="text-center text-sm mt-2 text-gray-500">
          {t('subtitle')}
        </h2>
        <PollContainer>
          <TextBox
            label="Title"
            placeholder="Type your question here"
            sizeVariant="large"
          />
        </PollContainer>
      </div>
    </>
  );
}

export async function generateMetadata({
  params: { locale },
}: MetadataPropsWithLocale): Promise<Metadata> {
  const t = await getTranslator(locale, 'Create');

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
