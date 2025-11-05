import { cn } from '@/shared/utils';
import type { StatusType } from '@/shared/types';

import { CardWrapper } from '../card-wrapper';
import { WeekForecastContent, type WeekForecastDataType } from '../week-forecast-content';

import './styles.scss';

export interface WeekForecastCardProps {
  className?: string;
  status: StatusType;
  error: string | null;
  data: WeekForecastDataType | null;
}

export const WeekForecastCard = ({ data, className, status, error }: WeekForecastCardProps) => {
  const wrapperClass = cn('week-forecast-wrapper', className);

  return (
    <CardWrapper error={error} status={status} isData={Boolean(data)} className={wrapperClass}>
      {data && <WeekForecastContent data={data} className={className} />}
    </CardWrapper>
  );
};
