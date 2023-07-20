import { Routes } from '@/src/utils/enums/routes';

export interface IMobileUpperSectionProps {
  closeMenu: () => void;
}

export interface INavigationLinkProps {
  link: Routes | '#';
  text: string;
  icon?: any;
  disabled?: boolean;
  isMobile: boolean;
}
