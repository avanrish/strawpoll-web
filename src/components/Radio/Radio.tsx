import { RadioProps } from './Radio.type';

export const Radio = ({
  value,
  checked,
  name,
  label,
  onChange,
}: RadioProps) => {
  return (
    <label
      className={`flex items-center px-2.5 py-3 border border-gray-200 dark:border-gray-700 rounded-md max-w-md cursor-pointer ${
        checked
          ? 'ring-2 ring-indigo-600 dark:ring-indigo-500 border-transparent'
          : ''
      }`}
    >
      <input
        type="radio"
        className={`min-w-[1.25rem] h-5 mr-2.5 dark:bg-gray-700 ${
          checked ? 'accent-indigo-600 dark:accent-indigo-500' : ''
        }`}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-lg truncate sm:text-base grow">
        {label ?? value}
      </span>
    </label>
  );
};
