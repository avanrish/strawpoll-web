import { useTranslations } from 'next-intl';

import { Feature } from '@/src/components/Feature/Feature';
import { features } from '@/src/utils/fixtures/features';

export const FeatureSection = () => {
  const t = useTranslations('FeatureSection');
  return (
    <div className="bg-gray-100 dark:bg-gray-800 pb-32 pt-16 overflow-hidden space-y-24">
      {features.map((feat, i) => (
        <Feature
          icon={feat.icon}
          key={feat.title}
          title={t(feat.title)}
          description={t(feat.description)}
          lightImage={feat.lightImage}
          darkImage={feat.darkImage}
          link1={{ ...feat.link1, label: t(feat.link1.label) }}
          link2={{ ...feat.link2, label: t(feat.link2.label) }}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  );
};
