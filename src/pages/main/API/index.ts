import { serviceGet } from "@/services/api";
import { MarketsResponseType } from "../types";

const ENDPOINTS = {
  MARKETS: "v1/mkt/markets/",
};

export const getMarketsListAPI = () => {
  return serviceGet<MarketsResponseType>({
    url: ENDPOINTS.MARKETS,
  });
};
