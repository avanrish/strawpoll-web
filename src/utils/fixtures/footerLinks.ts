import { Routes } from '@/src/utils/enums/routes';

interface FooterLink {
  key: keyof IntlMessages['Footer']['links'];
  url: Routes | '#';
}

interface FooterLinks {
  solutions: FooterLink[];
  support: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
}

export const footerLinks: FooterLinks = {
  solutions: [
    { key: 'pollMaker', url: '#' },
    { key: 'meetingScheduler', url: '#' },
    { key: 'discordBot', url: '#' },
    { key: 'pollApi', url: '#' },
    { key: 'rankings', url: '#' },
  ],
  support: [
    { key: 'pricing', url: '#' },
    { key: 'helpCenter', url: '#' },
    { key: 'guides', url: '#' },
    { key: 'faq', url: '#' },
    { key: 'integrations', url: '#' },
  ],
  company: [
    { key: 'about', url: '#' },
    { key: 'imprint', url: '#' },
    { key: 'contact', url: '#' },
  ],
  legal: [
    { key: 'privacyPolicy', url: '#' },
    { key: 'termsOfService', url: '#' },
  ],
};
