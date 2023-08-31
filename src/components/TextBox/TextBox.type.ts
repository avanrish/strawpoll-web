export interface TextBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  sizeVariant?: 'medium' | 'large';
  error?: string;
}
