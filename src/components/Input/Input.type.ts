export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeVariant?: 'medium' | 'large';
  error?: string;
}
