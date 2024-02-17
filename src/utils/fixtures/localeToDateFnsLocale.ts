import { enGB, de } from 'date-fns/locale';

import { Locales } from '@/src/utils/enums/locales';

export const localeToDateFnsLocale = (locale: string) => {
  switch (locale) {
    case Locales.GERMAN:
      return de;
    case Locales.ENGLISH:
    default:
      return enGB;
  }
};
