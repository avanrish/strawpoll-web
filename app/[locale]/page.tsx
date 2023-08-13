import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';
import { cookies } from 'next/headers';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { ThemeSwitch } from '@/src/components/ThemeSwitch';
import { appUrl, themeCookieKey } from '@/src/utils/fixtures/config';
import { Themes } from '@/src/utils/enums/themes';
import { Hero } from '@/src/components/Hero';
import { FeatureSection } from '@/src/components/FeatureSection';
import { ExploreRankings } from '@/src/components/ExploreRankings';
import { CTASection } from '@/src/components/CTASection';

export default async function Home() {
  const theme = cookies().get(themeCookieKey);

  return (
    <>
      <Hero />
      <FeatureSection />
      <ExploreRankings />
      <CTASection />
      <ThemeSwitch defaultEnabled={theme?.value === Themes.Dark} />
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
