import { Locales } from '@/src/utils/enums/locales';
import { PollType } from '@/src/utils/enums/pollType';

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

export interface ApiResult<T> {
  result: T;
}

export interface Poll {
  id: number;
  createdAt: string;
  updatedAt: string;
  publicId: string;
  title: string;
  type: PollType;
  options: PollOption[];
}

export interface PollOption {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  count: number;
}

export interface ErrorObject {
  [key: string]: any;
}

export interface ServiceResult<T> {
  success: boolean;
  data: T;
}
