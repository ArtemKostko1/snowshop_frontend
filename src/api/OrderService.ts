import { instance, instanceAuth } from "../utils/axios/axios";
import { ORDERS } from "../utils/axios/apiRoutes";
import { ICreateOrderDto, IUpdateOrderDto } from "../common/types/order/orderTypes";

export const getAllOrders = async () => {
  try {
    const response = await instanceAuth.get(ORDERS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrdersByUserId = async (userId: number) => {
  try {
    const response = await instanceAuth.get(`${ORDERS}/order-history/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrderById = async (orderId: number) => {
  try {
    const response = await instanceAuth.get(`${ORDERS}/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (orderData: ICreateOrderDto) => {
  try {
    const response = await instance.post(`${ORDERS}/create`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrder = async (orderId: number, orderData: IUpdateOrderDto) => {
  try {
    const response = await instanceAuth.patch(`${ORDERS}/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (orderId: number) => {
  try {
    const response = await instanceAuth.delete(`${ORDERS}/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
