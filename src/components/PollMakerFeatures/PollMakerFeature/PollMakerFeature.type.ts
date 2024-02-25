import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Routes } from '@/src/utils/enums/routes';

export interface PollMakerFeatureProps {
  title: string;
  description: {
    part1: string;
    part2?: string;
  };
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  imageAlt: string;
  reverse: boolean;
  link: {
    label: string;
    href: Routes | '#';
    disabled?: boolean;
  };
}
