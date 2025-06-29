export const debounce = (callback: (query: string) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (arg: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(arg);
    }, delay);
  };
};
