import { useCallback } from 'react';
import { getCharacters } from '@/api/characters';
import useFetch from './useFetch';

export const useCharacters = () => {
  const fetcher = useCallback((signal: AbortSignal) => getCharacters(signal), []);
  return useFetch(fetcher);
};