import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { CalendarIcon, ChartPieIcon } from '@heroicons/react/24/outline';

import lightPollMaker from '@/src/assets/poll-maker-light.png';
import darkPollMaker from '@/src/assets/poll-maker-dark.png';
import { Routes } from '@/src/utils/enums/routes';
import lightMeetingScheduler from '@/src/assets/meeting-scheduler-light.png';
import darkMeetingScheduler from '@/src/assets/meeting-scheduler-dark.png';

export interface Feature {
  icon: typeof CalendarIcon;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  link1: string | Routes;
  link2: string | Routes;
  which: keyof IntlMessages['FeatureSection'];
}

export const features: Feature[] = [
  {
    icon: ChartPieIcon,
    lightImage: lightPollMaker,
    darkImage: darkPollMaker,
    link1: Routes.CreatePoll,
    link2: '#',
    which: 'first',
  },
  {
    icon: CalendarIcon,
    lightImage: lightMeetingScheduler,
    darkImage: darkMeetingScheduler,
    link1: '#',
    link2: '#',
    which: 'second',
  },
];
