import { DependencyList, useEffect, useState } from "react";

interface useAPIArgs<T, K> {
  requestFunction: (data: T) => Promise<K>;
  requestData: T;
  isReady?: boolean;
  dependencies?: DependencyList;
  successCallBack?: (data: K) => void;
}

export const useAPI = <T, K>({
  requestData,
  requestFunction,
  isReady,
  dependencies = [],
  successCallBack,
}: useAPIArgs<T, K>) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<K>();

  function request(data: T): Promise<K> {
    setLoading(true);
    return new Promise(function (resolve, reject) {
      requestFunction(data)
        ?.then((response: K) => {
          resolve(response);
          successCallBack?.(response);
        })
        ?.catch((error: K) => {
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    if (isReady) {
      request(requestData).then((res) => setResult(res));
    }
  }, [isReady, ...dependencies]);

  return { request, loading, result };
};
