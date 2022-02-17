import { useState, useEffect, useCallback } from 'react';

type PromiseFn<T> = (...args: any) => Promise<T>;

type ResponseType<T> = {
  isLoading: boolean;
  data: T | never[];
  isError: boolean;
};

const useAsync = <T>(callback: PromiseFn<T>, immediate = false) => {
  const [response, setResponse] = useState<ResponseType<T>>({
    isLoading: false,
    data: [],
    isError: false,
  });

  const execute = useCallback(async () => {
    setResponse((prevResponse) => ({ ...prevResponse, isLoading: true }));

    try {
      const data = await callback();
      setResponse((prevResponse) => ({
        ...prevResponse,
        isLoading: false,
        data,
      }));
    } catch (error) {
      setResponse((prevResponse) => ({
        ...prevResponse,
        isError: true,
      }));
    }
  }, [callback]);

  useEffect(() => {
    immediate && execute();
  }, [immediate, execute]);

  return { response, execute };
};

export default useAsync;
