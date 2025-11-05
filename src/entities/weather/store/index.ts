import { create } from 'zustand';

import { weatherApi } from '@/shared/api';
import { showMessage } from '@/shared/ui';
import type { StatusType } from '@/shared/types';
import { isAbortError, getErrorMessage } from '@/shared/utils';

import { WEATHER_ERROR } from '../constants';
import { normalizeWeatherData, type NormalizeWeatherDataType } from '../models';

interface WeatherState {
  status: StatusType;
  error: string | null;
  data: NormalizeWeatherDataType | null;
  currentController: AbortController | null;
}

interface WeatherActions {
  reset: () => void;
  cancelRequest: () => void;
  fetchWeatherByCity: (city: string) => Promise<void>;
  fetchWeatherByCoords: (lat: number, lon: number) => Promise<void>;
}

type WeatherStore = WeatherState & WeatherActions;

const initialState: WeatherState = {
  data: null,
  error: null,
  status: 'idle',
  currentController: null,
};

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  ...initialState,

  fetchWeatherByCoords: async (lat: number, lon: number) => {
    const { currentController } = get();
    if (currentController) {
      currentController.abort();
    }

    const controller = new AbortController();

    set({
      error: null,
      status: 'loading',
      currentController: controller,
    });
    let geo;

    try {
      const geoResponse = await weatherApi.getCityByGeoCode(lat, lon, {
        signal: controller.signal,
      });
      geo = geoResponse?.[0];

      if (!geo) {
        set({
          error: 'null',
          status: 'idle',
          currentController: null,
        });
        showMessage.error(WEATHER_ERROR.BY_COORDS);
        return;
      }
    } catch (error) {
      if (isAbortError(error)) {
        set({
          status: 'idle',
          currentController: null,
        });
        return;
      }
      set({
        status: 'error',
        currentController: null,
        error: getErrorMessage(error),
      });

      return;
    }

    try {
      const response = await weatherApi.getOneCallDailyByCoords(lat, lon, {
        signal: controller.signal,
      });

      if (controller.signal.aborted) {
        return;
      }
      const weatherData = normalizeWeatherData(geo, response);

      set({
        status: 'idle',
        data: weatherData,
        currentController: null,
      });
    } catch (error) {
      if (isAbortError(error)) {
        set({
          status: 'idle',
          currentController: null,
        });
        return;
      }

      set({
        status: 'error',
        currentController: null,
        error: getErrorMessage(error),
      });
    }
  },

  fetchWeatherByCity: async (city: string) => {
    const { currentController } = get();
    if (currentController) {
      currentController.abort();
    }

    const controller = new AbortController();

    set({
      error: null,
      status: 'loading',
      currentController: controller,
    });

    let geo;

    try {
      const geoResponse = await weatherApi.getGeoCodeByCity(city, {
        signal: controller.signal,
      });
      geo = geoResponse?.[0];

      if (!geo) {
        set({
          error: 'null',
          status: 'idle',
          currentController: null,
        });

        showMessage.error(WEATHER_ERROR.BY_CITY);

        return;
      }
    } catch (error) {
      if (isAbortError(error)) {
        set({
          status: 'idle',
          currentController: null,
        });
        return;
      }
      set({
        status: 'error',
        currentController: null,
        error: getErrorMessage(error),
      });

      return;
    }

    try {
      const response = await weatherApi.getOneCallDailyByCoords(geo.lat, geo.lon, {
        signal: controller.signal,
      });

      if (controller.signal.aborted) {
        return;
      }

      const weatherData = normalizeWeatherData(geo, response);

      console.log({ weatherData });

      set({
        status: 'idle',
        data: weatherData,
        currentController: null,
      });
    } catch (error) {
      if (isAbortError(error)) {
        set({
          status: 'idle',
          currentController: null,
        });
        return;
      }

      set({
        status: 'error',
        currentController: null,
        error: getErrorMessage(error),
      });
    }
  },

  cancelRequest: () => {
    const { currentController } = get();

    if (currentController) {
      currentController.abort();
      set({
        status: 'idle',
        currentController: null,
      });
    }
  },

  reset: () => {
    const { currentController } = get();

    if (currentController) {
      currentController.abort();
    }

    set(initialState);
  },
}));
