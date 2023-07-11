import { Routes } from '@/src/utils/enums/routes';
import { ChartBarIcon } from '@heroicons/react/24/outline';

type NavLink = {
  key: keyof IntlMessages['Header'];
  link: Routes;
  icon: any;
};

export const navLinks: NavLink[] = [
  {
    key: 'createPoll',
    link: Routes.CreatePoll,
    icon: ChartBarIcon,
  },
];
