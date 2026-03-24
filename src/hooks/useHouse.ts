import { useState, useEffect } from "react"
import { getHouse } from "@/api/house"
import { Person } from "@/types/person"

export const useHouse = (houseId: string) => {
  const [housePersons, setHousePersons] = useState<Person[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getHouse(houseId)
    .then(setHousePersons)
    .finally(() => setLoading(false));
  }, [houseId])

  return { housePersons, isLoading };
}