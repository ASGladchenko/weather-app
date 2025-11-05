import { Outlet } from 'react-router-dom';

import { PageLoader } from '@/shared/ui';
import { useGeolocation } from '@/features';

export const LayoutMain = () => {
  const { isLoading } = useGeolocation();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
