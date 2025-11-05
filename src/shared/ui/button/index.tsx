import { cn } from '@/shared/utils';

import type { ButtonProps } from './types';

import './styles.scss';

export const Button = ({
  loading,
  disabled,
  children,
  className,
  variant = 'filled',
  colorType = 'primary',
  ...props
}: ButtonProps) => {
  const btnCn = cn(
    'btn',
    `btn--${variant}`,
    `btn--${colorType}`,
    loading && 'btn--loading',
    className
  );

  return (
    <button className={btnCn} disabled={loading || disabled} {...props}>
      {children}
      {loading && <span className="btn__loader" />}
    </button>
  );
};
