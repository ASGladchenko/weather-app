import { cn } from '@/shared/utils';
import type { StatusType } from '@/shared/types';

import './styles.scss';

export interface CardWrapperProps {
  error: string | null;
  isData: boolean;
  className?: string;
  status: StatusType;
  children?: React.ReactNode;
}

export const CardWrapper = ({ children, className, status, error, isData }: CardWrapperProps) => {
  const wrapperClass = cn('card-wrapper', className);

  return (
    <div className={wrapperClass}>
      {status === 'idle' && !isData && (
        <span className="card-empty">No data available. Try searching for a city.</span>
      )}

      {status === 'loading' && <div className="card-loader"></div>}

      {status === 'error' && error && <span className="card-error">Error: {error}</span>}

      {status === 'idle' && isData && children}
    </div>
  );
};
