import { useState, useEffect, useCallback } from 'react';

type PromiseFn<T> = (...args: any) => Promise<T>;

type ResponseType<T> = {
  isLoading: boolean;
<<<<<<< HEAD
  data: Awaited<T> | never[];
=======
  data: T | never[];
>>>>>>> 19c34552c58ba52c536df1775a1d40383f72e2c6
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
