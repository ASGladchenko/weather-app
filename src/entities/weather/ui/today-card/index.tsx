import { cn } from '@/shared/utils';
import type { StatusType } from '@/shared/types';

import { CardWrapper } from '../card-wrapper';
import { TodayContent, type TodayContentDataType } from '../today-content';

import './styles.scss';

export interface TodayCardProps {
  className?: string;
  status: StatusType;
  error: string | null;
  data: TodayContentDataType | null;
}

export const TodayCard = ({ data, className, status, error }: TodayCardProps) => {
  const wrapperClass = cn('today-wrapper', className);

  return (
    <CardWrapper isData={Boolean(data)} className={wrapperClass} status={status} error={error}>
      {data && <TodayContent data={data} />}
    </CardWrapper>
  );
};
