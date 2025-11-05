import { lazy, Suspense } from 'react';

import { LayoutMain } from '@/pages';
import { PageLoader } from '@/shared/ui';

const HomePage = lazy(() => import('@/pages').then((module) => ({ default: module.HomePage })));

export const routes = [
  {
    id: 'root',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <HomePage />
              </Suspense>
            ),
          },
        ],
      },
      { path: '*', element: <div>404 Not Found</div> },
    ],
  },
];
