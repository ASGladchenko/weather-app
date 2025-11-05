import { useMemo } from 'react';

import { SearchForm } from '@/features';
import { TodayCard, useWeatherStore, WeekForecastCard, DailyForecastCard } from '@/entities';

import './styles.scss';

export const WeatherWidget = ({}) => {
  const { error, data, status } = useWeatherStore();

  const todayData = useMemo(
    () => (data ? { current: data.current, city: data.city } : null),
    [data]
  );

  const weekData = useMemo(() => (data ? { daily: data.daily } : null), [data]);

  const hourlyData = useMemo(() => (data ? { hourly: data.hourly } : null), [data]);

  return (
    <div className="weather-widget">
      <h3 className="weather-widget-title">Weather Forecast</h3>

      <SearchForm />

      <TodayCard error={error} status={status} data={todayData} />

      <DailyForecastCard error={error} status={status} data={hourlyData} />

      <WeekForecastCard error={error} status={status} data={weekData} />
    </div>
  );
};
