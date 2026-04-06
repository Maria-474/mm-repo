import { request } from './client';
import { Person } from '@/types/person';

export const getCharacters = async (signal?: AbortSignal) => {
  const data = await request<Person[]>('/characters', signal);
  return data
}