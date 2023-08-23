import { useId } from 'react';
import classNames from 'classnames';

import { TextBoxProps } from './TextBox.type';

export const TextBox = ({
  label,
  sizeVariant = 'medium',
  error,
  ...rest
}: TextBoxProps) => {
  const id = useId();

  const inputClass = classNames(
    'bg-white dark:bg-gray-700 flex-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-600 dark:text-gray-300 outline-indigo-500 outline-offset-1 dark:outline-none dark:ring-1 dark:ring-indigo-500 dark:placeholder-gray-500',
    {
      'py-2 px-3': sizeVariant === 'medium',
      'py-3 px-4': sizeVariant === 'large',
      'placeholder:text-red-400 text-rose-900 outline-red-500 border-red-300':
        error,
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
      </div>
      {error && <p className="form-item-error">{error}</p>}
    </div>
  );
};
