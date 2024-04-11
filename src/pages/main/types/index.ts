export interface MarketsResponseType {
  count: number;
  next: number;
  previous: number;
  results: MarketDetails[];
}

export interface MarketDetails {
  id: number;
  currency1: MarketCurrency;
  currency2: MarketCurrency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: MarketInfo;
  internal_price_info: MarketInfo;
  price_info: MarketInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
}

export interface MarketCurrency {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: MarketTag[];
  etf: boolean;
  for_binvest: boolean;
  for_loan: boolean;
  for_stake: boolean;
  recommend_for_deposit_weight: number;
}

export interface MarketTag {
  id: number;
  name: string;
  name_en: string;
  has_chart: boolean;
}

export interface MarketInfo {
  created_at: number | null;
  price: string;
  change: number;
  min: string;
  max: string;
  time: null | string;
  mean: null | string;
  value: null | string;
  amount: null | string;
}
