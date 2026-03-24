import { useState, useEffect } from "react"
import { getSpells } from "@/api/spells"
import { Spell } from "@/types/spell"

export const useSpells = () => {
  const [spells, setSpells] = useState<Spell[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getSpells()
    .then(setSpells)
    .finally(() => setLoading(false));
  }, [])

  return { spells, isLoading };
}