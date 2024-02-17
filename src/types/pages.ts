import { MetadataPropsWithLocale } from '@/src/types/common';

type Params = MetadataPropsWithLocale['params'] & {
  pollId: string;
};

export interface VotePageProps {
  params: Params;
}
