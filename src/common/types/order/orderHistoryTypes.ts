import { IOrder } from './orderTypes';

export interface OrderHistoryPageProps {
  userId?: number;
}

export interface OrderItemProps {
  order: IOrder;
}

export interface OrderProductItemProps {
  product: {
    id: number;
    productName: string;
    productArticle: string;
    productInternalCode: string;
    productSize?: string;
    productImage: string;
    quantity: number;
    price: number;
  };
  isLastItem?: boolean;
}
