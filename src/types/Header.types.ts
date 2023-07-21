import { Routes } from '@/src/utils/enums/routes';

export interface MobileUpperSectionProps {
  closeMenu: () => void;
}

export interface NavigationLinkProps {
  link: Routes | '#';
  text: string;
  icon?: any;
  disabled?: boolean;
  isMobile: boolean;
}
