import { XCircleIcon } from '@heroicons/react/20/solid';

import { ErrorMessageProps } from '@/src/components/ErrorMessage/ErrorMessage.type';

export function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <div className="rounded-md bg-red-50 dark:bg-red-400/10 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="size-5 text-red-500 dark:text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm text-red-800 dark:text-red-100">{text}</h3>
        </div>
      </div>
    </div>
  );
}
