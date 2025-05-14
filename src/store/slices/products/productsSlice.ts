import { createSlice } from "@reduxjs/toolkit";
import { createProductThunk, deleteProductThunk, getAllProductsThunk, updateProductThunk } from "../../thunks/products/productsThunk";
import { IProduct } from "../../../common/types/product/productTypes";

const initialState = {
  products: [] as IProduct[],
  isProductsLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllProductsThunk
    // Событие в момент выполенения запроса
    builder.addCase(getAllProductsThunk.pending, (state) => {
      state.isProductsLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getAllProductsThunk.rejected, (state) => {
      state.isProductsLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // createProductThunk
    // Событие в момент выполенения запроса
    builder.addCase(createProductThunk.pending, (state) => {
      state.isProductsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(createProductThunk.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(createProductThunk.rejected, (state) => {
      state.isProductsLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // updateProductThunk
    // Событие в момент выполенения запроса
    builder.addCase(updateProductThunk.pending, (state) => {
      state.isProductsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(updateProductThunk.fulfilled, (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }

      state.isProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(updateProductThunk.rejected, (state) => {
      state.isProductsLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // deleteProductThunk
    // Событие в момент выполенения запроса
    builder.addCase(deleteProductThunk.pending, (state) => {
      state.isProductsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      state.isProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(deleteProductThunk.rejected, (state) => {
      state.isProductsLoading = false;
    })
  },
});

export default productsSlice.reducer;
