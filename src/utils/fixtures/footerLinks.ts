import { Routes } from '@/src/utils/enums/routes';

interface FooterLink {
  key: keyof IntlMessages['Footer']['links'];
  url: Routes | '#';
  disabled?: boolean;
}

interface FooterLinks {
  solutions: FooterLink[];
  support: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
}

export const footerLinks: FooterLinks = {
  solutions: [
    { key: 'pollMaker', url: Routes.CreatePoll },
    { key: 'meetingScheduler', url: '#', disabled: true },
    { key: 'discordBot', url: '#', disabled: true },
    { key: 'pollApi', url: '#', disabled: true },
    { key: 'rankings', url: '#', disabled: true },
  ],
  support: [
    { key: 'pricing', url: '#', disabled: true },
    { key: 'helpCenter', url: '#', disabled: true },
    { key: 'guides', url: '#', disabled: true },
    { key: 'faq', url: '#', disabled: true },
    { key: 'integrations', url: '#', disabled: true },
  ],
  company: [
    { key: 'about', url: '#', disabled: true },
    { key: 'imprint', url: '#', disabled: true },
    { key: 'contact', url: '#', disabled: true },
  ],
  legal: [
    { key: 'privacyPolicy', url: '#', disabled: true },
    { key: 'termsOfService', url: '#', disabled: true },
  ],
};
