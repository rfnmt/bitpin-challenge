import { getBuyAndSellDetailsAPI, getTransactionsDetailsAPI } from "./API";

export const TAB_CODES = {
  buy: "buy",
  sell: "sell",
  transactions: "transactions",
} as const;

export type TabType = keyof typeof TAB_CODES;

export const MAX_VISIBLE_ITEMS = 10;

export const TABS = [
  {
    title: "خرید",
    key: TAB_CODES.buy,
  },
  {
    title: "فروش",
    key: TAB_CODES.sell,
  },
  {
    title: "معاملات",
    key: TAB_CODES.transactions,
  },
];

export const TABS_API = {
  [TAB_CODES.buy]: getBuyAndSellDetailsAPI,
  [TAB_CODES.sell]: getBuyAndSellDetailsAPI,
  [TAB_CODES.transactions]: getTransactionsDetailsAPI,
};

export const TRANSLATIONS = {
  emptyState: "داده‌ای یافت نشد!",
  buy: {
    col1: "قیمت",
    col1Result: "میانگین قیمت",
    col2: "مقدار",
    col2Result: "مجموع مقدار",
    col3: "باقی‌‌مانده",
    col3Result: "مجموع باقی‌‌مانده",
  },
  sell: {
    col1: "قیمت",
    col1Result: "میانگین قیمت",
    col2: "مقدار",
    col2Result: "مقدار",
    col3: "باقی‌‌مانده",
    col3Result: "مجموع باقی‌‌مانده",
  },
  transactions: {
    col1: "قیمت",
    col1Result: "",
    col2: "مقدار",
    col2Result: "",
    col3: "زمان",
    col3Result: "",
  },
} as const;
