import { request } from './client';
import { Person } from '@/types/person';
import { HouseName } from '@/types/house';

export const getHouse = async(houseId: HouseName, signal?: AbortSignal) => {
  const data = await request<Person[]>(`/characters/house/${houseId}`, signal);
  return data
}