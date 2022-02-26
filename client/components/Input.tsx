import { InputProps } from '../types';

export default function Input({ type, body, onChange, selected }: InputProps) {
  return (
    <label className="flex items-center space-x-3">
      <input
        type={type}
        className="cursor-pointer"
        checked={selected}
        onChange={() => onChange(body)}
      />
      <span className="cursor-pointer">{body}</span>
    </label>
  );
}
