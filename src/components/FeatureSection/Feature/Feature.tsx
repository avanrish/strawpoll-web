import { FeatureProps } from '@/src/components/FeatureSection/Feature/Feature.type';

export const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="pt-6">
      <div className="flow-root bg-gray-50 dark:bg-gray-800 px-6 pb-8 rounded-lg">
        <div className="-mt-6">
          <div className="p-3 rounded-md bg-indigo-500 dark:bg-indigo-400 max-w-max mx-auto">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight">
            {title}
          </h3>
          <p className="mt-5 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
