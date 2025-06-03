import { IProduct } from '../product/productTypes';

export interface ICartItemUniqueKey {
  internalCode: string;
  size?: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IShoppingCartState {
  items: ICartItem[];
  totalItems: number;
}

export interface IShoppingCartForm {
  email: string;
  phone: string;
  deliveryMethod: 'pickup' | 'delivery';
  paymentMethod: 'cash' | 'card';
  comment?: string;
}
