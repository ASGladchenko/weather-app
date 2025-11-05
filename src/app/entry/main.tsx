import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routes } from '../routes';

import 'react-toastify/dist/ReactToastify.css';
//
import '../styles/main.scss';

const browserRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
    <ToastContainer />
  </StrictMode>
);
