import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Routes } from '@/src/utils/enums/routes';
import { HeroIcon } from '@/src/types/common';

export interface FeatureProps {
  icon: HeroIcon;
  title: string;
  description: string;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  link1: {
    label: string;
    url: string | Routes;
  };
  link2: {
    label: string;
    url: string | Routes;
  };
  reverse?: boolean;
}
