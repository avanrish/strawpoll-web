import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Routes } from '@/src/utils/enums/routes';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className="relative">
      <div className="absolute w-full h-full -z-[1]">
        <Image
          src="/images/hero-background.jpg"
          alt={t('imageAlt')}
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className="w-full h-full absolute bg-gradient-to-r from-purple-800 to-indigo-700 dark:from-indigo-400 dark:to-indigo-400 mix-blend-multiply" />
      </div>
      <div className="py-16 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-center">
          <span className="block text-white">{t('titlePart1')}</span>
          <span className="block text-indigo-300">{t('titlePart2')}</span>
        </h1>
        <p className="mt-6 text-center text-lg text-indigo-200">
          {t('description')}
        </p>
        <div className="mt-10 flex flex-col gap-y-6">
          {/* TODO: Disable links */}
          <Link className="btn primary py-3" href={Routes.CreatePoll}>
            {t('createAPoll')}
          </Link>
          <Link className="btn bg-white py-3 text-gray-900" href="#">
            {t('viewExamples')}
          </Link>
        </div>
      </div>
    </div>
  );
};
