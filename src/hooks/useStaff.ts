import { useEffect, useState } from 'react';
import { getStaff } from '@/api/staff';
import { Person } from '@/types/person';

export const useStaff = () => {
  const [staff, setStaff] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStaff()
      .then(setStaff)
      .finally(() => setLoading(false));
  }, [])

  return { staff, isLoading };
}