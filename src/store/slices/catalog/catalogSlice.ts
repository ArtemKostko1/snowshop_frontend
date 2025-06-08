import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCatalogProductsThunk,
  getProductByArticleRouteThunk,
  getProductsByCategoryThunk,
} from '../../thunks/catalog/catalogThunk';
import { IProductDetails } from '../../../common/types/product/ProductDetailsTypes';

const initialState = {
  catalogProducts: [] as IProductDetails[],
  productDetails: {} as IProductDetails,
  isCatalogProductsLoading: false,
  isProductDetailsLoading: false,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    clearCatalogProducts: (state) => {
      state.catalogProducts = [];
    },
  },
  extraReducers: (builder) => {
    // getAllCatalogProductsThunk
    // Событие в момент выполенения запроса
    builder.addCase(getAllCatalogProductsThunk.pending, (state) => {
      state.isCatalogProductsLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getAllCatalogProductsThunk.fulfilled, (state, action) => {
      state.catalogProducts = action.payload;
      state.isCatalogProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getAllCatalogProductsThunk.rejected, (state) => {
      state.isCatalogProductsLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // getProductsByCategoryThunk
    // Событие в момент выполенения запроса
    builder.addCase(getProductsByCategoryThunk.pending, (state) => {
      state.isCatalogProductsLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
      state.catalogProducts = action.payload;
      state.isCatalogProductsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getProductsByCategoryThunk.rejected, (state) => {
      state.isCatalogProductsLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // getProductByArticleRouteThunk
    // Событие в момент выполенения запроса
    builder.addCase(getProductByArticleRouteThunk.pending, (state) => {
      state.isProductDetailsLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getProductByArticleRouteThunk.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.isProductDetailsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getProductByArticleRouteThunk.rejected, (state) => {
      state.isProductDetailsLoading = false;
    });
  },
});

export const { clearCatalogProducts } = catalogSlice.actions;

export default catalogSlice.reducer;
