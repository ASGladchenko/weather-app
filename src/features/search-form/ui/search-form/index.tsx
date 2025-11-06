import { useState, memo } from 'react';

import { cn } from '@/shared/utils';
import { useWeatherStore } from '@/entities';
import { Input, Button, showMessage } from '@/shared/ui';

import './styles.scss';

export const SearchForm = memo(({ className }: { className?: string }) => {
  const [value, setValue] = useState('');

  const { fetchWeather, status } = useWeatherStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      showMessage.warn('City name cannot be empty');
      return;
    }

    await fetchWeather({ city: trimmedValue });

    setValue(trimmedValue);
  };

  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const wrapperClassName = cn('search-form', className);

  return (
    <form onSubmit={handleSubmit} className={wrapperClassName}>
      <Input value={value} onChange={handleInputChange} />

      <Button loading={status === 'loading'} className="search-btn" type="submit">
        Search
      </Button>
    </form>
  );
});
