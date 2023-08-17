import { MetadataPropsWithLocale } from '@/src/types/common';
import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';
import { appUrl } from '@/src/utils/fixtures/config';

export default function Create() {
  return <>Create Poll</>;
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
