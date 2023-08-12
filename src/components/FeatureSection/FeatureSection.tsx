import { useTranslations } from 'next-intl';

import { FeatureHero } from '@/src/components/FeatureSection/FeatureHero';
import { features } from '@/src/utils/fixtures/features';

export const FeatureSection = () => {
  const t = useTranslations('FeatureSection');
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 pb-32 pt-16 overflow-hidden space-y-24">
        {features.map((feat, i) => (
          <FeatureHero
            icon={feat.icon}
            key={`${feat.which}.title`}
            title={t(`${feat.which}.title`)}
            description={t(`${feat.which}.description`)}
            lightImage={feat.lightImage}
            darkImage={feat.darkImage}
            link1={{ label: t(`${feat.which}.link1.label`), url: feat.link1 }}
            link2={{ label: t(`${feat.which}.link2.label`), url: feat.link2 }}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </>
  );
};
