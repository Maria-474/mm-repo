import { useCallback } from "react";
import { getSpells } from "@/api/spells"
import useFetch from "./useFetch";

export const useSpells = () => {
  const fetcher = useCallback((signal: AbortSignal) => getSpells(signal), [])
  return useFetch(fetcher)
}