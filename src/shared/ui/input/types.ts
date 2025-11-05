export type InputOnChange = (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: InputOnChange;
}
