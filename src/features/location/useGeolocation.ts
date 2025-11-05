import { useState, useEffect } from 'react';

import { showMessage } from '@/shared/ui';
import { useWeatherStore } from '@/entities';

import { GEOLOCATION_ERRORS } from './constants';

export interface GeolocationPosition {
  lat: number;
  lon: number;
}

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);

  const { fetchWeatherByCoords } = useWeatherStore();

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      showMessage.error(GEOLOCATION_ERRORS.NOT_SUPPORTED);
      return;
    }
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const {
          coords: { latitude, longitude },
        } = pos;

        try {
          await fetchWeatherByCoords(latitude, longitude);
        } catch {
        } finally {
          setIsLoading(false);
        }
      },
      (err) => {
        setIsLoading(false);
        switch (err.code) {
          case err.PERMISSION_DENIED:
            showMessage.error(GEOLOCATION_ERRORS.PERMISSION_DENIED);
            break;
          case err.POSITION_UNAVAILABLE:
            showMessage.error(GEOLOCATION_ERRORS.POSITION_UNAVAILABLE);
            break;
          case err.TIMEOUT:
            showMessage.error(GEOLOCATION_ERRORS.TIMEOUT);
            break;
          default:
            showMessage.error(GEOLOCATION_ERRORS.UNKNOWN);
        }
      },
      {
        timeout: 5000,
        maximumAge: 300000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  return { isLoading };
}
