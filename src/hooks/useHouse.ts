import { useCallback } from "react";
import { getHouse } from "@/api/house"
import useFetch from "./useFetch"
import { HouseName } from "@/types/house";

export const useHouse = (houseId: HouseName) => {
  const fetcher = useCallback(
    (signal: AbortSignal) => getHouse(houseId, signal),
    [houseId]
  );
  return useFetch(fetcher);
};