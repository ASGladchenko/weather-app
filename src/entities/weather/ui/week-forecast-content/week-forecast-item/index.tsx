import { memo } from 'react';

import { getShortWeekDay } from '@/shared/utils';

export interface WeekForecastItemProps {
  time: number;
  icon: string;
  tempMin: number;
  tempMax: number;
  summary: string;
}

export const WeekForecastItem = memo(
  ({ time, tempMin, tempMax, summary, icon }: WeekForecastItemProps) => {
    return (
      <div className="week-forecast-card-item">
        <span className="week-forecast-card-date">{getShortWeekDay(time)}</span>

        <img className="week-forecast-card-icon" src={icon} alt={summary} />
        <div className="week-forecast-card-temp-wrapper">
          <span className="week-forecast-card-temp">Min: {tempMin}°C</span>
          <span className="week-forecast-card-temp">Max: {tempMax}°C</span>
        </div>

        <span className="week-forecast-card-summary">{summary}</span>
      </div>
    );
  }
);

WeekForecastItem.displayName = 'WeekForecastItem';
