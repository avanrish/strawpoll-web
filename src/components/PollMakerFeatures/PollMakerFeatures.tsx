import { useTranslations } from 'next-intl';

import { PollMakerFeature } from '@/src/components/PollMakerFeatures/PollMakerFeature';
import { pollMakerFeatures } from '@/src/utils/fixtures/pollMakerFeatures';

export const PollMakerFeatures = () => {
  const t = useTranslations('PollMakerFeatures');

  return (
    <div className="pt-20 bg-white dark:bg-gray-800">
      <div className="sm:pt-16 sm:pb-32 lg:pt-20 lg:space-y-32 ">
        {pollMakerFeatures.map(
          ({ i18nKey, reverse, image, linkHref, disabled }) => (
            <PollMakerFeature
              key={i18nKey}
              title={t(`${i18nKey}.title`)}
              description={{
                part1: t(`${i18nKey}.description.part1`),
                part2: t(`${i18nKey}.description.part2`),
              }}
              lightImage={image.light}
              darkImage={image.dark}
              imageAlt={t(`${i18nKey}.title`)}
              link={{ label: t(`${i18nKey}.link`), href: linkHref, disabled }}
              reverse={reverse}
            />
          )
        )}
      </div>
    </div>
  );
};
