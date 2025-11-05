import { WeatherWidget } from '@/widgets';

import './styles.scss';

export const HomePage = () => {
  return (
    <section className="main-page">
      <WeatherWidget />
    </section>
  );
};
