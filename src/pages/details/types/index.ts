export interface DetailsResponseType {
  orders: Order[];
}

export interface Order {
  amount: string;
  remain: string;
  price: string;
  value: string;
}
