import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { Routes } from '@/src/utils/enums/routes';

export interface FeatureProps {
  icon: any;
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
