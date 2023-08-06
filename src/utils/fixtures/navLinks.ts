import { Routes } from '@/src/utils/enums/routes';
import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';

export type NavLink = {
  i18nKey: keyof IntlMessages['Header'];
  link: Routes | '#';
  icon: typeof CalendarIcon;
  disabled?: boolean;
};

export const navLinks: NavLink[] = [
  {
    i18nKey: 'createPoll',
    link: Routes.CreatePoll,
    icon: ChartBarIcon,
    disabled: true,
  },
  {
    i18nKey: 'scheduleMeeting',
    link: '#',
    icon: CalendarIcon,
    disabled: true,
  },
  {
    i18nKey: 'demo',
    link: '#',
    icon: CursorArrowRaysIcon,
    disabled: true,
  },
  {
    i18nKey: 'pricing',
    link: '#',
    icon: CreditCardIcon,
    disabled: true,
  },
];

export const additionalMobileMenuLinks: Omit<NavLink, 'icon'>[] = [
  {
    i18nKey: 'helpCenter',
    link: '#',
    disabled: true,
  },
  {
    i18nKey: 'guides',
    link: '#',
    disabled: true,
  },
  {
    i18nKey: 'liveDemo',
    link: '#',
    disabled: true,
  },
  {
    i18nKey: 'faq',
    link: '#',
    disabled: true,
  },
  {
    i18nKey: 'pollApi',
    link: '#',
    disabled: true,
  },
  {
    i18nKey: 'about',
    link: '#',
    disabled: true,
  },
];
