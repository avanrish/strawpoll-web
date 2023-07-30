import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';
import { cookies } from 'next/headers';

import { MetadataPropsWithLocale } from '@/src/types/common';
import { ThemeSwitch } from '@/src/components/ThemeSwitch';
import { themeCookieKey } from '@/src/utils/fixtures/config';
import { Themes } from '@/src/utils/enums/themes';

export default async function Home() {
  const theme = cookies().get(themeCookieKey);

  return (
    <div>
      <ThemeSwitch defaultEnabled={theme?.value === Themes.Dark} />
    </div>
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
  };
}
