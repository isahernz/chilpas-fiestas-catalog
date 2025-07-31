import { useState, useEffect } from "react";

export const useApi = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Upps! Ocurred an error"));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
