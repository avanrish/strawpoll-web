import { PollContainerProps } from './PollContainer.type';

export const PollContainer = ({
  withoutMargin,
  children,
}: PollContainerProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border max-sm:border-x-0 border-t-4 border-t-amber-400 dark:border-t-indigo-400 border-b-gray-300 dark:border-gray-800 py-5 px-4 sm:p-6 sm:rounded-md ${
        withoutMargin ? '' : 'mt-8'
      }`}
    >
      {children}
    </div>
  );
};
