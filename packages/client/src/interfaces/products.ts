export interface IProductProps {
  id: string;
  title: string;
  cover_url: string;
  unit_price: string;
}

export interface IServerProductProps extends IProductProps {
  quantity_stock: number;
}

export interface ICartProductProps extends IProductProps {
  quantity_cart: number;
}
