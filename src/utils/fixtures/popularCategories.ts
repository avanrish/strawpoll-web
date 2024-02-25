import { Routes } from '@/src/utils/enums/routes';

interface PopularCategory {
  key: keyof IntlMessages['ExploreRankings'];
  url: Routes | '#';
  disabled: boolean;
}

export const popularCategories: PopularCategory[] = [
  { key: 'entertainment', url: '#', disabled: true },
  { key: 'popCulture', url: '#', disabled: true },
  { key: 'travel', url: '#', disabled: true },
  { key: 'gaming', url: '#', disabled: true },
  { key: 'sports', url: '#', disabled: true },
];
