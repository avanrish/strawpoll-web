import { useTranslations } from 'next-intl';

import { OptionResultBarProps } from './OptionResultBar.type';

export function OptionResultBar({
  option,
  percentage,
  color,
}: OptionResultBarProps) {
  const t = useTranslations('PollResults.Results');

  return (
    <div key={option.id} className="mt-3 first:mt-0">
      <div className="flex justify-between items-center">
        <p>{option.title}</p>
        <p>
          <span>{`${percentage}% `}</span>
          <span>({t('votesCount', { count: option.count })})</span>
        </p>
      </div>
      <div className="border dark:border-gray-700 dark:bg-[#2A3441] h-[1.125rem] rounded-lg mt-1 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
