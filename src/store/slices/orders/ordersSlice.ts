import { createSlice } from "@reduxjs/toolkit";
import { createOrderThunk, deleteOrderThunk, getAllOrdersThunk, getOrdersByUserIdThunk, updateOrderThunk } from "../../thunks/orders/ordersThunk";
import { IOrder } from "../../../common/types/order/orderTypes";

const initialState = {
  orders: [] as IOrder[],
  userOrders: [] as IOrder[],
  isUserOrdersLoading: false,
  isOrdersLoading: false,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllOrdersThunk
    // Событие в момент выполенения запроса
    builder.addCase(getAllOrdersThunk.pending, (state) => {
      state.isOrdersLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getAllOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.isOrdersLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getAllOrdersThunk.rejected, (state) => {
      state.isOrdersLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // getOrdersByUserIdThunk
    // Событие в момент выполенения запроса
    builder.addCase(getOrdersByUserIdThunk.pending, (state) => {
      state.isUserOrdersLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getOrdersByUserIdThunk.fulfilled, (state, action) => {
      state.userOrders = action.payload;
      state.isUserOrdersLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getOrdersByUserIdThunk.rejected, (state) => {
      state.isUserOrdersLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // createOrderThunk
    // Событие в момент выполенения запроса
    builder.addCase(createOrderThunk.pending, (state) => {
      state.isOrdersLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(createOrderThunk.fulfilled, (state, action) => {
      state.orders.push(action.payload);
      state.isOrdersLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(createOrderThunk.rejected, (state) => {
      state.isOrdersLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // updateOrderThunk
    // Событие в момент выполенения запроса
    builder.addCase(updateOrderThunk.pending, (state) => {
      state.isOrdersLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(updateOrderThunk.fulfilled, (state, action) => {
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.id
      );

      if (index !== -1) {
        state.orders[index] = action.payload;
      }

      state.isOrdersLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(updateOrderThunk.rejected, (state) => {
      state.isOrdersLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // deleteOrderThunk
    // Событие в момент выполенения запроса
    builder.addCase(deleteOrderThunk.pending, (state) => {
      state.isOrdersLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(deleteOrderThunk.fulfilled, (state, action) => {
      state.orders = state.orders.filter((order) => order.id !== action.payload);
      state.isOrdersLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(deleteOrderThunk.rejected, (state) => {
      state.isOrdersLoading = false;
    })
  },
});

export default ordersSlice.reducer;
