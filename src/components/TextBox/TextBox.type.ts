export interface TextBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  sizeVariant?: 'medium' | 'large';
  error?: string;
}
