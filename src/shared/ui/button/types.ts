import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariantType = 'filled';

export type ButtonColorType = 'primary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  colorType?: ButtonColorType;
  variant?: ButtonVariantType;
  children?: ReactNode | React.JSX.Element;
}
