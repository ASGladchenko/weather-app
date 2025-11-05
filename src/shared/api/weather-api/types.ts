export interface CityItem {
  lat: number;
  lon: number;
  name: string;
  country: string;
  local_names?: Record<string, string>;
}

export interface WeatherShort {
  id: number;
  main: string;
  icon: string;
  description: string;
}

export interface HourlyForecast {
  dt: number;
  temp: number;
  pressure: number;
  humidity: number;
  feels_like: number;
  weather: WeatherShort[];
}

export interface DailyTemp {
  day: number;
  min: number;
  max: number;
  eve: number;
  morn: number;
  night: number;
}

export interface DailyFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface DailyForecast {
  dt: number;
  sunset: number;
  clouds: number;
  sunrise: number;
  temp: DailyTemp;
  summary: string;
  pressure: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherShort[];
  feels_like: DailyFeelsLike;
}

export interface OneCallResponse {
  lat: number;
  lon: number;
  timezone: string;
  daily: DailyForecast[];
  timezone_offset: number;
  current: HourlyForecast;
  hourly: HourlyForecast[];
}
