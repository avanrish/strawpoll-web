import { useTranslations } from 'next-intl';

import { FeatureHero } from '@/src/components/FeatureSection/FeatureHero';
import { features, heroFeatures } from '@/src/utils/fixtures/heroFeatures';
import { Feature } from '@/src/components/FeatureSection/Feature';

export const FeatureSection = () => {
  const t = useTranslations('FeatureSection');
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 pb-32 pt-16 overflow-hidden space-y-24">
        {heroFeatures.map((feat, i) => (
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
      <div className="pt-16 pb-32 bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-md text-center sm:px-6 lg:px-8 sm:max-w-3xl lg:max-w-7xl">
          <h2 className="text-indigo-600 font-semibold uppercase tracking-wider">
            {t('features.subtitle')}
          </h2>
          <p className="font-extrabold text-gray-900 dark:text-gray-200 text-3xl tracking-tight mt-2 sm:text-4xl">
            {t('features.title')}
          </p>
          <p className="mt-5 text-gray-500 text-xl max-w-prose mx-auto">
            {t('features.description')}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, featureKey }) => (
              <Feature
                key={featureKey}
                title={t(`features.${featureKey}.title`)}
                icon={icon}
                description={t(`features.${featureKey}.description`)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
