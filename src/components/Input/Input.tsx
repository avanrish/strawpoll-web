import { useId } from 'react';
import classNames from 'classnames';

import { InputProps } from '@/src/components/Input/Input.type';

export const Input = ({
  label,
  sizeVariant = 'medium',
  ...rest
}: InputProps) => {
  const id = useId();

  const inputClass = classNames(
    'flex-1 border border-gray-300 rounded-md text-gray-600 outline-indigo-500 outline-offset-1',
    {
      'py-2 px-3': sizeVariant === 'medium',
      'py-3 px-4': sizeVariant === 'large',
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
        {/* Error */}
        {/* Button - Icon */}
      </div>
    </div>
  );
};
