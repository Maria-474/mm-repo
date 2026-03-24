import { request } from './client'
import { Person } from '@/types/person'

export const getStaff = async () => {
  const data = await request<Person[]>('/characters/staff')
  return data
}