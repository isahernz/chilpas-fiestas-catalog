import { useCallback, useRef, useEffect } from "react";

export function useDebounce<T extends unknown[]>(callback: (...args: T) => void, delay: number): (...args: T) => void {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clear();
  }, [clear]);
  const debouncedCallback = useCallback<(...args: T) => void>(
    (...args) => {
      clear();
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay, clear]
  );

  return debouncedCallback;
}

export const useDebouncedCallback = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  return useDebounce(callback, delay);
};
