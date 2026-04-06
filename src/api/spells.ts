import { request } from './client'
import { Spell } from '@/types/spell'

export const getSpells = async (signal?: AbortSignal) => {
  const data = await request<Spell[]>('/spells', signal)
  return data
}