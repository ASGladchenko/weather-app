import { apiConstants } from '@/shared/constants';
import type { CityItem, DailyForecast, OneCallResponse } from '@/shared/api';

const makeIconUrl = (iconCode: string) => {
  if (!iconCode) return '';

  return `${apiConstants.weatherIconsBaseUrl}/${iconCode}@2x.png`;
};

const dateToLocalString = (dt: number) => {
  const local = new Date(dt * 1000);
  return local.toLocaleString('ru-RU');
};

export const normalizeDailyForecast = (daily: DailyForecast) => ({
  summary: daily.summary,
  time: dateToLocalString(daily.dt),
  tempMin: Math.round(daily.temp.min),
  tempMax: Math.round(daily.temp.max),
  icon: makeIconUrl(daily.weather[0].icon),
});

export const normalizeWeatherData = (city: CityItem, data: OneCallResponse) => {
  const cur = data.current;

  return {
    city: city.name,
    lat: city.lat,
    lon: city.lon,
    current: {
      temp: Math.round(cur.temp),
      time: dateToLocalString(cur.dt),
      feelsLike: Math.round(cur.feels_like),
      icon: makeIconUrl(cur.weather[0].icon),
      description: cur.weather[0].description,
    },
    daily: data.daily.map(normalizeDailyForecast),
  };
};

export type NormalizeWeatherDataType = ReturnType<typeof normalizeWeatherData>;
