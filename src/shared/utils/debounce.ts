export const debounce = <Args extends unknown[]>(func: (...args: Args) => void, delay = 330) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced as ((...args: Args) => void) & { cancel: () => void };
};
