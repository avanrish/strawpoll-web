import { useId } from 'react';
import classNames from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import { TextBoxProps } from './TextBox.type';

export const TextBox = ({
  label,
  sizeVariant = 'medium',
  error,
  ...rest
}: TextBoxProps) => {
  const id = useId();

  const inputClass = classNames(
    'bg-white outline-none dark:bg-white/5 flex-1 ring-1 ring-gray-300 dark:ring-gray-700 rounded-md focus:ring-indigo-500 focus:ring-2 focus:ring-indigo-500',
    {
      'py-2 px-3': sizeVariant === 'medium',
      'py-3 px-4': sizeVariant === 'large',
      'placeholder:text-red-400 text-red-500 focus:ring-red-500': error,
      'dark:placeholder-gray-500 text-gray-600 dark:text-gray-300': !error,
    }
  );

  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="mt-1 relative flex">
        <input {...rest} type="text" id={id} className={inputClass} />
        {/* Button - Icon */}
        {error && (
          <div className="inset-y-px right-px absolute text-red-500 flex items-center px-3">
            <ExclamationCircleIcon className="size-5" />
          </div>
        )}
      </div>
      {error && <p className="form-item-error">{error}</p>}
    </div>
  );
};
