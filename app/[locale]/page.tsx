import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';

import { MetadataPropsWithLocale } from '@/src/types/common';

export default function Home() {
  return <div>Hello</div>;
}

export async function generateMetadata({
  params: { locale },
}: MetadataPropsWithLocale): Promise<Metadata> {
  const t = await getTranslator(locale, 'Index');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      siteName: t('metadata.siteName'),
    },
  };
}
