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
    'flex-1 border border-gray-300 rounded-md text-gray-600 outline-indigo-500 outline-offset-1',
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
        <label htmlFor={id} className="label text">
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
