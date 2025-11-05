import { type ToastOptions } from 'react-toastify';

export const toastConfig: ToastOptions = {
  draggable: true,
  autoClose: 2000,
  closeOnClick: true,
  pauseOnHover: true,
  closeButton: false,
  className: 'toast',
  position: 'top-right',
};
