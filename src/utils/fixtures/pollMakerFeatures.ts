import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

import { Routes } from '@/src/utils/enums/routes';
import CreatePollVoteLight from '@/src/assets/create-poll-vote-light.png';
import CreatePollVoteDark from '@/src/assets/create-poll-vote-dark.png';
import CreatePollResultsLight from '@/src/assets/create-poll-results-light.png';
import CreatePollResultsDark from '@/src/assets/create-poll-results-dark.png';

interface PollMakerFeature {
  i18nKey: keyof IntlMessages['PollMakerFeatures'];
  image: {
    light: StaticImageData;
    dark: StaticImageData;
  };
  linkHref: Routes | '#';
  reverse: boolean;
  disabled?: boolean;
}

export const pollMakerFeatures: PollMakerFeature[] = [
  {
    i18nKey: 'pollInSeconds',
    image: { light: CreatePollVoteLight, dark: CreatePollVoteDark },
    linkHref: '#',
    reverse: false,
    disabled: true,
  },
  {
    i18nKey: 'realTimeResults',
    image: { light: CreatePollResultsLight, dark: CreatePollResultsDark },
    linkHref: '#',
    reverse: true,
    disabled: true,
  },
];
