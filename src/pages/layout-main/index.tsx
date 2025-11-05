import { Outlet } from 'react-router-dom';

import { useGeolocation } from '@/features';

export const LayoutMain = () => {
  const { isLoading } = useGeolocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
