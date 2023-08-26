import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { appUrl } from '@/src/utils/fixtures/config';
import { Hero } from '@/src/components/Hero';
import { FeatureSection } from '@/src/components/FeatureSection';
import { ExploreRankings } from '@/src/components/ExploreRankings';
import { CTASection } from '@/src/components/CTASection';

export default async function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ExploreRankings variant="darker" />
      <CTASection />
    </>
  );
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
    metadataBase: new URL(appUrl),
  };
}
