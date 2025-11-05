import { cn } from '@/shared/utils';
import { SimpleAreaChart } from '@/shared/ui';

import type { NormalizeWeatherDataType } from '../../models';

import './styles.scss';

export type DailyForecastDataType = Pick<NormalizeWeatherDataType, 'hourly'>;

export interface DailyForecastContentProps {
  className?: string;
  data: DailyForecastDataType;
}

export const DailyForecastContent = ({ data, className }: DailyForecastContentProps) => {
  const wrapperClass = cn('daily-forecast-card', className);

  return (
    <div className={wrapperClass}>
      <h6 className="week-forecast-card-title">12-hour forecast</h6>

      <div className="daily-forecast-card-content scroll-bar-light">
        <SimpleAreaChart<DailyForecastDataType['hourly'][0]>
          xKey="time"
          dataKey="temp"
          data={data.hourly}
          className="daily-area-chart"
        />
      </div>
    </div>
  );
};
