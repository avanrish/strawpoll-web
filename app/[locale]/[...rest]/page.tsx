import { getTranslator } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { appUrl } from '@/src/utils/fixtures/config';

export default function CatchAllPage() {
  return notFound();
}

export async function generateMetadata({
  params: { locale },
}: MetadataPropsWithLocale): Promise<Metadata> {
  const t = await getTranslator(locale, 'NotFound');

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
    },
    metadataBase: new URL(appUrl),
  };
}
