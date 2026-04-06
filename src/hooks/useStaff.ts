import { useCallback } from 'react';
import { getStaff } from '@/api/staff';
import useFetch from './useFetch';

export const useStaff = () => {
  const fetcher = useCallback((signal: AbortSignal) => getStaff(signal), []);
  return useFetch(fetcher)
}