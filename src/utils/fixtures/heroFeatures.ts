import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import {
  BeakerIcon,
  CalendarIcon,
  ChartPieIcon,
  ClockIcon,
  CodeBracketIcon,
  FaceSmileIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import lightPollMaker from '@/src/assets/poll-maker-light.png';
import darkPollMaker from '@/src/assets/poll-maker-dark.png';
import { Routes } from '@/src/utils/enums/routes';
import lightMeetingScheduler from '@/src/assets/meeting-scheduler-light.png';
import darkMeetingScheduler from '@/src/assets/meeting-scheduler-dark.png';
import { HeroIcon } from '@/src/types/common';

export interface HeroFeature {
  icon: HeroIcon;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  link1: { url: string | Routes; disabled?: boolean };
  link2: { url: string | Routes; disabled?: boolean };
  which: keyof Omit<IntlMessages['FeatureSection'], 'features'>;
}

export interface Feature {
  icon: HeroIcon;
  featureKey: keyof Omit<
    IntlMessages['FeatureSection']['features'],
    'title' | 'subtitle' | 'description'
  >;
}

export const heroFeatures: HeroFeature[] = [
  {
    icon: ChartPieIcon,
    lightImage: lightPollMaker,
    darkImage: darkPollMaker,
    link1: { url: Routes.CREATE_POLL },
    link2: { url: '#', disabled: true },
    which: 'first',
  },
  {
    icon: CalendarIcon,
    lightImage: lightMeetingScheduler,
    darkImage: darkMeetingScheduler,
    link1: { url: '#', disabled: true },
    link2: { url: '#', disabled: true },
    which: 'second',
  },
];

export const features: Feature[] = [
  {
    icon: ShieldCheckIcon,
    featureKey: 'fakeDetection',
  },
  {
    icon: ClockIcon,
    featureKey: 'deadlines',
  },
  {
    icon: FaceSmileIcon,
    featureKey: 'emojiSupport',
  },
  {
    icon: FaceSmileIcon,
    featureKey: 'liveResults',
  },
  {
    icon: CodeBracketIcon,
    featureKey: 'api',
  },
  {
    icon: BeakerIcon,
    featureKey: 'activeDevelopment',
  },
];
