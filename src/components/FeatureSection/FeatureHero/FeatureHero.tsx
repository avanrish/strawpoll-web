import Link from 'next-intl/link';
import Image from 'next/image';

import { FeatureHeroProps } from '@/src/components/FeatureSection/FeatureHero/FeatureHero.type';

export const FeatureHero = ({
  icon: Icon,
  title,
  description,
  lightImage,
  darkImage,
  link1,
  link2,
  reverse,
}: FeatureHeroProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:px-8 lg:grid-flow-col-dense lg:gap-24 lg:mx-auto lg:max-w-7xl">
      <div className="px-4 mx-auto my-auto max-w-xl sm:px-6 lg:px-0 lg:py-16">
        <div className="h-12 w-12 bg-indigo-600 dark:bg-indigo-500 rounded-md flex items-center justify-center text-white">
          {<Icon className="w-6 h-6" />}
        </div>
        <div className="mt-6">
          <p className="text-3xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight">
            {title}
          </p>
          <p className="mt-4 text-gray-500 text-lg">{description}</p>
        </div>
        <div className="mt-6">
          <Link
            className="btn primary py-3 mr-1 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
            href={link1.url}
            aria-disabled={link1.disabled}
          >
            {link1.label}
          </Link>
          <Link
            className="btn py-3 bg-white border border-gray-300 dark:border-gray-700 ml-3 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
            href={link2.url}
            aria-disabled={link2.disabled}
          >
            {link2.label}
          </Link>
        </div>
      </div>
      <div
        className={`mt-12 sm:mt-16 lg:mt-0 ${reverse ? 'lg:col-start-1' : ''}`}
      >
        <div
          className={`lg:px-0 lg:m-0 lg:relative lg:h-full ${
            reverse
              ? '-ml-48 pr-4 sm:pr-6 md:-ml-16'
              : '-mr-48 pl-4 sm:pl-6 md:-mr-16'
          }`}
        >
          <Image
            loading="lazy"
            className={`block dark:hidden w-full ring-1 rounded-xl shadow-xl ring-gray-300 dark:ring-gray-700 lg:absolute lg:h-full lg:w-auto lg:max-w-none ${
              reverse ? 'lg:right-0' : 'lg:left-0'
            }`}
            style={{ aspectRatio: lightImage.width / lightImage.height }}
            src={lightImage}
            alt={title}
          />
          <Image
            loading="lazy"
            className={`hidden dark:block w-full ring-1 rounded-xl shadow-xl ring-gray-300 dark:ring-gray-700 lg:absolute lg:h-full lg:w-auto lg:max-w-none ${
              reverse ? 'lg:right-0' : 'lg:left-0'
            }`}
            style={{ aspectRatio: lightImage.width / lightImage.height }}
            src={darkImage}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};
