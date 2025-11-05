import { HomePage, LayoutMain } from '@/pages';

export const routes = [
  {
    id: 'root',
    element: <LayoutMain />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <div>404 Not Found</div> },
    ],
  },
];
