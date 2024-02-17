import { XCircleIcon } from '@heroicons/react/20/solid';

import { ErrorMessageProps } from '@/src/components/ErrorMessage/ErrorMessage.type';

export function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className="mb-5 rounded-md bg-red-50 dark:bg-gray-800 p-4 border border-transparent dark:border-red-500">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="size-5 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm text-red-800 dark:text-gray-300">{text}</h3>
        </div>
      </div>
    </div>
  );
}
