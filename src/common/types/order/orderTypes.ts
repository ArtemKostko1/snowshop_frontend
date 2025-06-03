export interface IOrder {
  id: number;
  email: string;
  phoneNumber: string;
  userId?: number;
  status: string;
  totalPrice: number;
  delivery: string;
  paymentMethod: string;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  orderId: number;
  productId?: number;
  quantity: number;
  price: number;
  productName: string;
  productInternalCode: string;
  productSize?: string;
  productImage: string;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface ICreateOrderDto {
  email: string;
  phoneNumber: string;
  userId?: number;
  delivery: string;
  paymentMethod: string;
  comment?: string;
  orderItems: {
    productInternalCode: string;
    productSize: string;
    quantity: number;
  }[];
}

export interface IUpdateOrderDto {
  status: OrderStatus;
}
