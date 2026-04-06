import { useEffect, useState, DependencyList } from "react"

type FetchState<T> = {
  data: T[];
  isLoading: boolean;
  error: Error | null;
};

export default function useFetch<T>(
  fetcher: (signal: AbortSignal) => Promise<T[]>,
  deps: DependencyList = []
): FetchState<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let isMounted = true;

    setLoading(true);
    setError(null);

    fetcher(signal)
    .then((result) => {
      if (!isMounted) return;
      setData(result)
    })
    .catch((err) => {
      if (!isMounted) return;

      if (err instanceof Error && err.name === "AbortError") return;

      setError(err instanceof Error ? err : new Error("Unknown error")) 
    })
    .finally(() => {
      if (!isMounted) return;
      setLoading(false)
    })

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [fetcher, ...deps])

  return { data, isLoading, error }
}