import { Routes } from '@/src/utils/enums/routes';
import {
  CalendarIcon,
  ChartBarIcon,
  CreditCardIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';
import { HeroIcon } from '@/src/types/common';

export type NavLink = {
  i18nKey: keyof IntlMessages['Header'];
  link: Routes | '#';
  icon: HeroIcon;
  disabled?: boolean;
};

export const navLinks: NavLink[] = [
  {
    i18nKey: 'createPoll',
    link: Routes.CREATE_POLL,
    icon: ChartBarIcon,
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
