import { serviceGet } from "@/services/api";
import { DetailsResponseType } from "../types";

const ENDPOINTS = {
  buyAndSell: (marketId: string) => `v2/mth/actives/${marketId}/`,
  transactions: (marketId: string) => `v2/mth/matches/${marketId}/`,
};

export const getBuyAndSellDetailsAPI = ({
  type,
  marketId,
}: {
  type: "sell" | "buy";
  marketId: string;
}) => {
  // TODO: fix type
  return serviceGet<DetailsResponseType>({
    url: ENDPOINTS.buyAndSell(marketId),
    queryParamsObj: { type },
  });
};

export const getTransactionsDetailsAPI = ({
  marketId,
}: {
  marketId: string;
}) => {
  return serviceGet<DetailsResponseType>({
    url: ENDPOINTS.transactions(marketId),
  });
};
