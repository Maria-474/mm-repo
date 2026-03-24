import { useEffect, useState } from 'react';
import { getCharacters } from '@/api/characters';
import { Person } from '@/types/person';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
    .then(setCharacters)
    .finally(() => setLoading(false));
  }, [])

  return { characters, isLoading };
}