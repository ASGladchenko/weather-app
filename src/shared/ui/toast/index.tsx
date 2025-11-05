import { toast, type ToastOptions } from 'react-toastify';

import { toastConfig } from './config';

const getOptions = (options?: ToastOptions) =>
  options
    ? {
        ...toastConfig,
        ...options,
      }
    : toastConfig;

const messageShow = () => ({
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      progressClassName: 'toast-progress-success',
      ...getOptions(options),
    });
  },
  warn: (message: string, options?: ToastOptions) => {
    toast.warn(message, {
      progressClassName: 'toast-progress-warn',
      ...getOptions(options),
    });
  },
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      progressClassName: 'toast-progress-error',
      ...getOptions(options),
    });
  },
});

export const showMessage = messageShow();
