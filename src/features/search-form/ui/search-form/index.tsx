import { useState, useCallback } from 'react';

import { cn } from '@/shared/utils';
import { useWeatherStore } from '@/entities';
import { Input, Button, showMessage } from '@/shared/ui';

import './styles.scss';

export const SearchForm = ({ className }: { className?: string }) => {
  const [value, setValue] = useState('');

  const { fetchWeather, status } = useWeatherStore();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!value.trim()) {
        showMessage.warn('City name cannot be empty');
        return;
      }

      await fetchWeather({ city: value.trim() });
      setValue(value.trim());
    },
    [fetchWeather, value]
  );

  const handleInputChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const wrapperClassName = cn('search-form', className);

  return (
    <form onSubmit={handleSubmit} className={wrapperClassName}>
      <Input value={value} onChange={handleInputChange} />

      <Button loading={status === 'loading'} className="search-btn" type="submit">
        Search
      </Button>
    </form>
  );
};
