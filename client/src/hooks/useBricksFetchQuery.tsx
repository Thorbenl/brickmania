import {useQuery} from "react-query";
import {fetchBrickData} from "../api";

export const useBricksFetchQuery = () => useQuery(
  "bricks-total",
  fetchBrickData,
  {
    refetchInterval: 10000,
  },
)
