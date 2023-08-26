import Image from 'next/image';

import { PollMakerFeatureProps } from './PollMakerFeature.type';

export const PollMakerFeature = ({
  title,
  description,
  lightImage,
  darkImage,
  imageAlt,
  link,
  reverse,
}: PollMakerFeatureProps) => {
  return (
    <div
      className={`flex lg:gap-x-24 lg:mx-auto lg:max-w-7xl lg:px-8 ${
        reverse
          ? 'flex-col-reverse lg:flex-row-reverse'
          : 'flex-col lg:flex-row'
      }`}
    >
      <div
        className={`px-4 sm:px-6 lg:px-0 lg:flex-1 ${
          reverse ? 'max-lg:mt-12' : ''
        }`}
      >
        <Image
          src={lightImage}
          alt={imageAlt}
          className="dark:hidden shadow-xl border border-gray-300 rounded-xl"
        />
        <Image
          src={darkImage}
          alt={imageAlt}
          className="hidden dark:block shadow-xl border border-gray-700 rounded-xl"
        />
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:flex-1">
        <div className="pt-12 sm:pt-32 lg:pt-0">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-gray-200">
            {title}
          </h2>
          <div className="mt-6 space-y-6 text-lg text-gray-500">
            <p>{description.part1}</p>
            {description.part2 && (
              <p className="leading-7">{description.part2}</p>
            )}
          </div>
          <a
            className="block mt-10 font-medium text-indigo-500 aria-disabled:opacity-50 aria-disabled:pointer-events-none"
            href={link.href}
            aria-disabled={link.disabled}
          >
            {link.label}
          </a>
        </div>
      </div>
    </div>
  );
};
