import { cn } from '@/shared/utils';

import { WeekForecastItem } from './week-forecast-item';
import type { NormalizeWeatherDataType } from '../../models';

import './styles.scss';

export type WeekForecastDataType = Pick<NormalizeWeatherDataType, 'daily'>;

export interface WeekForecastContentProps {
  className?: string;
  data: WeekForecastDataType;
}

export const WeekForecastContent = ({ data, className }: WeekForecastContentProps) => {
  const wrapperClass = cn('week-forecast-card', className);

  return (
    <div className={wrapperClass}>
      <h6 className="week-forecast-card-title">7-day Forecast</h6>

      <div className="week-forecast-card-list">
        {data.daily.map((day) => (
          <WeekForecastItem
            key={day.time}
            time={day.time}
            icon={day.icon}
            tempMin={day.tempMin}
            tempMax={day.tempMax}
            summary={day.summary}
          />
        ))}
      </div>
    </div>
  );
};
