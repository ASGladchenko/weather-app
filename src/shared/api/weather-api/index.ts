import axios from 'axios';

import { apiConstants } from '@/shared/constants';

import type { CityItem, OneCallResponse } from './types';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const weatherApi = {
  getCityByGeoCode: (lat: number, lon: number, config?: { signal?: AbortSignal }) =>
    axios
      .get<CityItem[]>(`${apiConstants.weatherGeoBaseUrl}/reverse`, {
        params: { lat, lon, limit: 1, appid: API_KEY },
        ...config,
      })
      .then((r) => r.data),

  getGeoCodeByCity: (city: string, config?: { signal?: AbortSignal }, limit = 1) =>
    axios
      .get<CityItem[]>(`${apiConstants.weatherGeoBaseUrl}/direct`, {
        params: { q: city, limit, appid: API_KEY },
        ...config,
      })
      .then((r) => r.data),

  getOneCallDailyByCoords: (lat: number, lon: number, config?: { signal?: AbortSignal }) => {
    return axios
      .get<OneCallResponse>(`${apiConstants.weatherOneCallBaseUrl}/onecall`, {
        params: {
          lat,
          lon,
          lang: 'en',
          appid: API_KEY,
          units: 'metric',
          exclude: 'minutely,alerts',
        },
        ...config,
      })
      .then((r) => r.data);
  },
};
