import { cn } from '@/shared/utils';
import type { StatusType } from '@/shared/types';

import { CardWrapper } from '../card-wrapper';
import { DailyForecastContent, type DailyForecastDataType } from '../daily-forecast-content';

export interface DailyForecastCardProps {
  className?: string;
  status: StatusType;
  error: string | null;
  data: DailyForecastDataType | null;
}

export const DailyForecastCard = ({ className, status, error, data }: DailyForecastCardProps) => {
  const wrapperClass = cn('daily-forecast-card', className);
  return (
    <CardWrapper isData={Boolean(data)} className={wrapperClass} status={status} error={error}>
      {data && <DailyForecastContent data={data} />}
    </CardWrapper>
  );
};
