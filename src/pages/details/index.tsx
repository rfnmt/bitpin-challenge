import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import {
  TAB_CODES,
  TABS,
  TRANSLATIONS,
  TabType,
  TABS_API,
  MAX_VISIBLE_ITEMS,
} from "./constants";
import { DetailsResponseType, Order } from "./types";
import { formatNumberWithCommas, isEmpty, toFa } from "@/utils";
import Tab from "@/shared/Tab";
import { useParams } from "react-router-dom";
import Loading from "@/shared/Loading";

export default function Details() {
  const { marketId } = useParams();

  const [{ activeTab, pageData }, setPageData] = useState<{
    pageData: Order[];
    activeTab: TabType;
  }>({
    pageData: [],
    activeTab: TAB_CODES.buy,
  });

  const isTransactionsTab = activeTab === "transactions";
  const requestData = {
    type: !isTransactionsTab ? activeTab : undefined,
    marketId: marketId as string,
  };

  const successCallBack = (data: DetailsResponseType) => {
    setPageData((prev) => ({
      ...prev,
      pageData: data.orders.slice(0, MAX_VISIBLE_ITEMS),
    }));
  };

  const { loading, request } = useAPI({
    // @ts-ignore
    requestFunction: TABS_API[activeTab],
    requestData,
    isReady: true,
    dependencies: [activeTab],
    successCallBack,
  });

  // TODO: It's better to be handled with web socket
  useEffect(() => {
    const id = setInterval(() => {
      request(requestData).then(successCallBack);
    }, 3000);

    return () => clearInterval(id);
  }, [activeTab]);

  const setActiveTab = (tab: TabType) => {
    setPageData({
      pageData: [],
      activeTab: tab,
    });
  };

  const priceAverage = isTransactionsTab
    ? 0
    : (
        pageData.reduce((acc, cur) => acc + Number(cur.price), 0) /
        MAX_VISIBLE_ITEMS
      ).toFixed(3);

  const amountAll = isTransactionsTab
    ? 0
    : pageData.reduce((acc, cur) => acc + Number(cur.amount), 0);

  const remainAll = isTransactionsTab
    ? 0
    : pageData.reduce((acc, cur) => acc + Number(cur.remain), 0);

  return (
    <div className="py-4 d-flex">
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <div className="grid grid-cols-3 text-2xl p-3 bg-gray-800 text-white border-t border-white">
        <p>{TRANSLATIONS[activeTab].col1}</p>
        <p>{TRANSLATIONS[activeTab].col2}</p>
        <p>{TRANSLATIONS[activeTab].col3}</p>
      </div>

      {isEmpty(pageData) && !loading && (
        <div className="text-2xl text-gray-800 mt-5 text-center">
          {TRANSLATIONS.emptyState}
        </div>
      )}

      {loading && isEmpty(pageData) && <Loading className="my-5" />}

      {pageData?.map((item, index) => (
        <div
          key={`${item.value}_${item.amount}_${index}`}
          className="grid grid-cols-3 text-xl p-3 bg-gray-500 text-white border-t border-white"
        >
          <p>{formatNumberWithCommas(+item.price)}</p>
          <p>{toFa(item.amount)}</p>
          <p>{isTransactionsTab ? "" : toFa(item.remain)}</p>
        </div>
      ))}

      {!isTransactionsTab && (
        <div className="grid grid-cols-3 text-2xl p-3 bg-gray-800 text-white border-t border-white">
          <p>{`${TRANSLATIONS[activeTab].col1Result}: ${formatNumberWithCommas(
            +priceAverage
          )}`}</p>
          <p>{`${TRANSLATIONS[activeTab].col2Result}: ${toFa(amountAll)}`}</p>
          <p>{`${TRANSLATIONS[activeTab].col3Result}: ${toFa(remainAll)}`}</p>
        </div>
      )}
    </div>
  );
}
