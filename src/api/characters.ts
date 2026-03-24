import { request } from './client';
import { Person } from '@/types/person';

export const getCharacters = async () => {
  const data = await request<Person[]>('/characters');
  return data
}