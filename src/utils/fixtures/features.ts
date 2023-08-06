import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { CalendarIcon, ChartPieIcon } from '@heroicons/react/24/outline';

import lightPollMaker from '@/src/utils/assets/poll-maker-light.png';
import darkPollMaker from '@/src/utils/assets/poll-maker-dark.png';
import { Routes } from '@/src/utils/enums/routes';
import lightMeetingScheduler from '@/src/utils/assets/meeting-scheduler-light.png';
import darkMeetingScheduler from '@/src/utils/assets/meeting-scheduler-dark.png';

export interface Feature {
  icon: React.FC<React.ComponentProps<'svg'>>;
  title: any;
  description: any;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  link1: {
    label: any;
    url: string;
  };
  link2: {
    label: any;
    url: string;
  };
}

export const features = [
  {
    icon: ChartPieIcon,
    title: 'first.title',
    description: 'first.description',
    lightImage: lightPollMaker,
    darkImage: darkPollMaker,
    link1: {
      label: 'first.link1.label',
      url: Routes.CreatePoll,
    },
    link2: {
      label: 'first.link2.label',
      url: '#',
    },
  },
  {
    icon: CalendarIcon,
    title: 'second.title',
    description: 'second.description',
    lightImage: lightMeetingScheduler,
    darkImage: darkMeetingScheduler,
    link1: {
      label: 'second.link1.label',
      url: '#',
    },
    link2: {
      label: 'second.link2.label',
      url: '#',
    },
  },
] as unknown as Feature[];
