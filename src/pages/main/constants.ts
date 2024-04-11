export const MARKET_CODES = {
  IRT: "IRT",
  USDT: "USDT",
} as const;

export type TabType = keyof typeof MARKET_CODES;

export const TABS = [
  {
    title: "بازارهای تومانی",
    key: MARKET_CODES.IRT,
  },
  {
    title: "بازارهای تتری",
    key: MARKET_CODES.USDT,
  },
];

export const TRANSLATIONS = {
  title: "نام",
  price: "قیمت",
  code: "کد",
  maxBuyAmount: "بیشترین میزان خرید",
  maxSellAmount: "بیشترین میزان فروش",
  more: "جزئیات بیشتر",
};
