import { request } from './client'
import { Spell } from '@/types/spell'

export const getSpells = async () => {
  const data = await request<Spell[]>('/spells')
  return data
}