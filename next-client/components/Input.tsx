interface IInput {
  type: string;
  body: string;
  onChange: (body: string) => void;
  selected: boolean;
}

export default function Input({ type, body, onChange, selected }: IInput) {
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
