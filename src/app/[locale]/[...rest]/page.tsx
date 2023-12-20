import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { appUrl } from '@/src/utils/fixtures/config';

export default function CatchAllPage() {
  return notFound();
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('NotFound');

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
