import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Routes } from '@/src/utils/enums/routes';
import { HeroIcon } from '@/src/types/common';

export interface FeatureHeroProps {
  icon: HeroIcon;
  title: string;
  description: string;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  link1: {
    label: string;
    url: string | Routes;
    disabled?: boolean;
  };
  link2: {
    label: string;
    url: string | Routes;
    disabled?: boolean;
  };
  reverse?: boolean;
}
