import { forwardRef, useCallback } from 'react';

import { cn } from '@/shared/utils';

import type { BaseInputProps } from './types';

import './styles.scss';

export const Input = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ onChange, className, ...props }, ref) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value, e);
      },
      [onChange]
    );

    const inputClassName = cn('input', className);

    return <input className={inputClassName} ref={ref} {...props} onChange={handleChange} />;
  }
);

Input.displayName = 'Input';
