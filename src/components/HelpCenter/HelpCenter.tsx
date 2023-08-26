import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import CreateHelpCenter from '@/src/assets/create-help-center.jpeg';

export const HelpCenter = () => {
  const t = useTranslations('HelpCenter');

  return (
    <div className="bg-gray-900 md:flex xl:max-h-[33.375rem]">
      <div className="relative max-sm:h-56 max-md:sm:h-72 md:flex-1 md:basis-1/2">
        <Image
          className="object-cover w-full h-full"
          src={CreateHelpCenter}
          alt={t('imageAlt')}
        />
        <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-sm:max-w-md px-4 py-12 sm:px-6 sm:py-20 md:flex-1 md:basis-1/2 md:py-28 md:pl-10 lg:pr-8 lg:pl-10 lg:py-32">
        <h2 className="text-gray-300 uppercase font-semibold tracking-wider">
          {t('subtitle')}
        </h2>
        <p className="font-extrabold text-3xl text-white mt-2 tracking-tight sm:text-4xl">
          {t('title')}
        </p>
        <p className="text-gray-300 text-lg mt-3 md:max-w-xl">
          {t('description')}
        </p>
        <a
          className="btn mt-8 bg-white py-3 px-5 hover:bg-gray-50 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
          href="#"
          aria-disabled
        >
          <span className="text-gray-900">{t('link')}</span>
          <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" />
        </a>
      </div>
    </div>
  );
};
