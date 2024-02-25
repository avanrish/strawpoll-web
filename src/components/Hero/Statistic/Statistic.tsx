import { StatisticProps } from '@/src/components/Hero/Statistic/Statistic.type';

export const Statistic = ({ label, value }: StatisticProps) => {
  return (
    <div className="p-5 text-center space-y-2">
      <p className="text-4xl font-extrabold text-indigo-500 dark:text-indigo-400">
        {value}
      </p>
      <p className="text-lg font-medium leading-6">{label}</p>
    </div>
  );
};
