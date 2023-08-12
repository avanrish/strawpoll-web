import { Routes } from '@/src/utils/enums/routes';
import { HeroIcon } from '@/src/types/common';

export interface NavigationLinkProps {
  link: Routes | '#';
  text: string;
  icon?: HeroIcon;
  disabled?: boolean;
  isMobile: boolean;
}
