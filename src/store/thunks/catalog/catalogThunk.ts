import { createAsyncThunk } from '@reduxjs/toolkit';
import appErrors from '../../../assets/constants/errors';
import { errorsHandling } from '../_utils/errorsHandling';
import { ErrorResponse } from '../../../common/types/error/errorTypes';
import { getAllCatalogProducts, getProductByArticleRoute, getProductsByCategory } from '../../../api/CatalogService';
import { IProductDetails } from '../../../common/types/product/ProductDetailsTypes';
import { IProduct } from '../../../common/types/product/productTypes';

const getAllCatalogProducts_baseError = appErrors.catalogErrors.GET_ALL_CATALOG_PRODUCTS;
const getProductByArticleRoute_baseError = appErrors.catalogErrors.GET_PRODUCT_BY_ARTICLE_ROUTE;

export const getAllCatalogProductsThunk = createAsyncThunk<
  IProductDetails[],
  void,
  { rejectValue: string }
>('catalog/getAllCatalogProducts', async (_, { rejectWithValue }) => {
  try {
    return await getAllCatalogProducts();
  } catch (error) {
    const errorMessage = errorsHandling(getAllCatalogProducts_baseError, error as ErrorResponse);
    return rejectWithValue(errorMessage);
  }
});

export const getProductsByCategoryThunk = createAsyncThunk<
  IProductDetails[],
  string,
  { rejectValue: string }
>('catalog/getProductsByCategory', async (categoryName, { rejectWithValue }) => {
  try {
    return await getProductsByCategory(categoryName);
  } catch (error) {
    //const errorMessage = errorsHandling(getProductByArticleRoute_baseError, error as ErrorResponse);
    return rejectWithValue(error as string);
  }
});

export const getProductByArticleRouteThunk = createAsyncThunk<
  IProductDetails,
  string,
  { rejectValue: string }
>('catalog/getProductByArticleRoute', async (articleRoute, { rejectWithValue }) => {
  try {
    return await getProductByArticleRoute(articleRoute);
  } catch (error) {
    const errorMessage = errorsHandling(getProductByArticleRoute_baseError, error as ErrorResponse);
    return rejectWithValue(errorMessage);
  }
});
