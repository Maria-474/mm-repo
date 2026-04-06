import { request } from './client'
import { Person } from '@/types/person'

export const getStaff = async (signal?: AbortSignal) => {
  const data = await request<Person[]>('/characters/staff', signal)
  return data
}