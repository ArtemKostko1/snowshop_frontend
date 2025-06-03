import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import appErrors from '../../../common/constants/errors/appErrors';
import { errorsHandling } from '../_utils/errorsHandling';
import toastMessages from '../../../common/constants/toastMessages';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from '../../../api/OrderService';
import { ErrorResponse } from '../../../common/types/error/errorTypes';
import { IOrder, IUpdateOrderDto, ICreateOrderDto } from '../../../common/types/order/orderTypes';
const getAllOrders_baseError = appErrors.ordersErrors.GET_ALL_ORDERS;
const getOrderById_baseError = appErrors.ordersErrors.GET_ORDER_BY_ID;
const createOrder_baseError = appErrors.ordersErrors.CREATE_ORDER;
const updateOrder_baseError = appErrors.ordersErrors.UPDATE_ORDER;
const deleteOrder_baseError = appErrors.ordersErrors.DELETE_ORDER;

export const getAllOrdersThunk = createAsyncThunk<IOrder[], void, { rejectValue: string }>(
  'orders/getAllOrders',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllOrders();
    } catch (error) {
      const errorMessage = errorsHandling(getAllOrders_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const getOrderByIdThunk = createAsyncThunk<IOrder, number, { rejectValue: string }>(
  'orders/getOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      return await getOrderById(orderId);
    } catch (error) {
      const errorMessage = errorsHandling(getOrderById_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const createOrderThunk = createAsyncThunk<IOrder, ICreateOrderDto, { rejectValue: string }>(
  'orders/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const createdOrder = await createOrder(orderData);
      toast.success(toastMessages.ordersMessages.ORDER_CREATED);
      return createdOrder;
    } catch (error) {
      const errorMessage = errorsHandling(createOrder_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateOrderThunk = createAsyncThunk<IOrder, IOrder, { rejectValue: string }>(
  'orders/updateOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const updatedOrder = await updateOrder(orderData.id, orderData as IUpdateOrderDto);
      toast.success(toastMessages.ordersMessages.ORDER_UPDATED);
      return updatedOrder;
    } catch (error) {
      const errorMessage = errorsHandling(updateOrder_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const deleteOrderThunk = createAsyncThunk<number, number, { rejectValue: string }>(
  'orders/deleteOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      await deleteOrder(orderId);
      toast.success(toastMessages.ordersMessages.ORDER_DELETED);
      return orderId;
    } catch (error) {
      const errorMessage = errorsHandling(deleteOrder_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);
