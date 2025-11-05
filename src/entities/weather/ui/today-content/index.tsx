import { cn } from '@/shared/utils';

import type { NormalizeWeatherDataType } from '../../models';

import './styles.scss';

export type TodayContentDataType = Pick<NormalizeWeatherDataType, 'current' | 'city'>;

export interface TodayContentProps {
  className?: string;
  data: TodayContentDataType;
}

export const TodayContent = ({ data, className }: TodayContentProps) => {
  const wrapperClass = cn('today-card', className);

  return (
    <div className={wrapperClass}>
      <p className="today-card__city">{data.city}</p>

      <p className="today-card__temperature">{data.current.temp}°C</p>

      <img className="today-card__icon" src={data.current.icon} alt={data.current.description} />

      <p className="today-card__description">{data.current.description}</p>
    </div>
  );
};
