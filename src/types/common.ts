import { Locales } from '@/src/utils/enums/locales';

export interface MetadataPropsWithLocale {
  params: {
    locale: Locales;
  };
}

export type HeroIcon = React.ComponentType<
  React.PropsWithoutRef<React.ComponentProps<'svg'>> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }
>;
