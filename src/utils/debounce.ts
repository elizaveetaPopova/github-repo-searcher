export const debounce = (callback: (query: string) => void, delay: number) => {
  let timerId: number;

  return (arg: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(arg);
    }, delay);
  };
};
