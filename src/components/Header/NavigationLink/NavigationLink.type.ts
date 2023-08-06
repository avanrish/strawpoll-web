import { CalendarIcon } from '@heroicons/react/24/outline';

import { Routes } from '@/src/utils/enums/routes';

export interface NavigationLinkProps {
  link: Routes | '#';
  text: string;
  icon?: typeof CalendarIcon;
  disabled?: boolean;
  isMobile: boolean;
}
