import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Routes } from '@/src/utils/enums/routes';

export const Main = () => {
  const t = useTranslations('Hero.Main');

  return (
    <div className="sm:pt-8">
      <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="shadow-xl relative sm:rounded-2xl">
          <div className="absolute w-full h-full ">
            <Image
              src="/images/hero-background.jpg"
              alt={t('imageAlt')}
              style={{ objectFit: 'cover' }}
              className="sm:rounded-2xl"
              priority
              fill
            />
            <div className="w-full h-full absolute bg-gradient-to-r from-purple-800 to-indigo-700 dark:from-indigo-400 dark:to-indigo-400 mix-blend-multiply sm:rounded-2xl" />
          </div>
          <div className="relative py-16 px-4 sm:px-6 sm:py-24 lg:pt-28 lg:pb-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-left sm:ml-12 sm:text-5xl lg:text-6xl lg:ml-14">
              <span className="block text-white">{t('titlePart1')}</span>
              <span className="block text-indigo-300">{t('titlePart2')}</span>
            </h1>
            <p className="mt-6 text-center text-lg text-indigo-200 mx-auto max-w-sm sm:text-left sm:ml-12 sm:text-xl sm:max-w-2xl lg:ml-14">
              {t('description')}
            </p>
            <div className="mt-10 flex mx-auto max-w-sm sm:max-w-none">
              <div className="max-sm:w-full grid grid-cols-1 gap-6 sm:grid-cols-2 sm:ml-12 lg:ml-14">
                <Link
                  className="btn primary py-3 sm:px-8 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                  href={Routes.CreatePoll}
                  aria-disabled
                >
                  {t('createAPoll')}
                </Link>
                <Link
                  className="btn bg-white py-3 text-gray-900 sm:px-8 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
                  href="#"
                  aria-disabled
                >
                  {t('viewExamples')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
