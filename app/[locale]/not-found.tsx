import Image from 'next/image';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { PollContainer } from '@/src/components/PollContainer';
import error404 from '@/src/assets/error-404.png';
import { Routes } from '@/src/utils/enums/routes';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="max-w-3xl mx-auto pt-10 pb-12 sm:px-4">
      <PollContainer withoutMargin>
        <div className="space-y-8 flex flex-col items-center">
          <h1 className="text-3xl font-medium text-center text-gray-600 dark:text-gray-400">
            {t('title')}
          </h1>
          <Image
            src={error404}
            alt={t('imageAlt')}
            className="max-w-[70%] mx-auto"
            width={350}
          />
          <p className="text-red-500 text-center">{t('description')}</p>
          <Link href={Routes.Home} className="btn primary text-sm">
            {t('link')}
          </Link>
        </div>
      </PollContainer>
    </div>
  );
}
