import { getTranslations } from 'next-intl/server';
import 'server-only';

import { appUrl } from '@/src/utils/config/client';

export const getNotFoundMetadata = async () => {
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
};
