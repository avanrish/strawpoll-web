import {createSharedPathnamesNavigation} from 'next-intl/navigation';

import { Locales } from '@/src/utils/enums/locales';

export const locales = Object.values(Locales)
export const localePrefix = 'always';

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});
