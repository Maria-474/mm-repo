import { request } from './client';
import { Person } from '@/types/person';

export const getHouse = async(houseId: string) => {
  const data = await request<Person[]>(`/characters/house/${houseId}`);
  return data
}