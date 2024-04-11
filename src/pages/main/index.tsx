import { useAPI } from "@/hooks/useAPI";
import { getMarketsListAPI } from "./API";
import { useState } from "react";
import { MARKET_CODES, TABS, TRANSLATIONS, TabType } from "./constants";
import { MarketDetails } from "./types";
import Loading from "@/shared/Loading";
import { formatNumberWithCommas } from "@/utils";
import Tab from "@/shared/Tab";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes";

export default function Main() {
  const [pageData, setPageData] = useState<{
    IRT: MarketDetails[];
    USDT: MarketDetails[];
    activeTab: TabType;
  }>({
    IRT: [],
    USDT: [],
    activeTab: MARKET_CODES.IRT,
  });
  const { loading } = useAPI({
    requestFunction: getMarketsListAPI,
    requestData: {},
    isReady: true,
    successCallBack(data) {
      const newRialMarkets = data?.results?.filter(
        (item) => item.currency2.code === MARKET_CODES.IRT
      );

      const newTetherMarkets = data?.results?.filter(
        (item) => item.currency2.code === MARKET_CODES.USDT
      );

      setPageData((prev) => ({
        ...prev,
        IRT: newRialMarkets,
        USDT: newTetherMarkets,
      }));
    },
  });

  const setActiveTab = (tab: TabType) => {
    setPageData((prev) => ({
      ...prev,
      activeTab: tab,
    }));
  };

  if (loading) return <Loading className="mx-auto mt-10" />;

  return (
    <div className="py-4 d-flex">
      <Tab
        activeTab={pageData.activeTab}
        setActiveTab={setActiveTab}
        tabs={TABS}
      />
      <div className="grid grid-cols-6 text-2xl p-3 bg-gray-800 text-white border-t border-white dark:border-gray-700">
        <p>{TRANSLATIONS.code}</p>
        <p>{TRANSLATIONS.title}</p>
        <p>{TRANSLATIONS.price}</p>
        <p>{TRANSLATIONS.maxBuyAmount}</p>
        <p>{TRANSLATIONS.maxSellAmount}</p>
      </div>
      {/* TODO: Here, we should use virtual lists + Mobile view */}
      {/* NOTE: I could not find pagination query param for api request to implement pagination with it */}

      {pageData[pageData.activeTab]?.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-6 text-xl p-3 bg-gray-500 text-white border-t border-white"
        >
          <p>{item.code}</p>
          <p>{item.title_fa}</p>
          <p>{formatNumberWithCommas(+item.price)}</p>
          <p>{formatNumberWithCommas(+item.otc_max_buy_amount)}</p>
          <p>{formatNumberWithCommas(+item.otc_max_sell_amount)}</p>

          <div className="flex justify-center">
            <Link to={`${ROUTES.DETAILS}/${item.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {TRANSLATIONS.more}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
