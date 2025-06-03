import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appErrors from "../../../common/constants/errors/appErrors";
import { errorsHandling } from "../_utils/errorsHandling";
import toastMessages from "../../../common/constants/toastMessages";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../api/ProductService";
import { IProduct } from "../../../common/types/product/productTypes";
import { ErrorResponse } from "../../../common/types/error/errorTypes";

const getAllProducts_baseError = appErrors.productsErrors.GET_ALL_PRODUCTS;
const getProductById_baseError = appErrors.productsErrors.GET_PRODUCT_BY_ID;
const createProduct_baseError = appErrors.productsErrors.CREATE_PRODUCT;
const updateProduct_baseError = appErrors.productsErrors.UPDATE_PRODUCT;
const deleteProduct_baseError = appErrors.productsErrors.DELETE_PRODUCT;

export const getAllProductsThunk = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>("products/getAllProducts", async (_, { rejectWithValue }) => {
  try {
    return await getAllProducts();
  } catch (error) {
    const errorMessage = errorsHandling(
      getAllProducts_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const getProductByIdThunk = createAsyncThunk<
  IProduct,
  number,
  { rejectValue: string }
>("products/getProductById", async (productId, { rejectWithValue }) => {
  try {
    return await getProductById(productId);
  } catch (error) {
    const errorMessage = errorsHandling(
      getProductById_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const createProductThunk = createAsyncThunk<
  IProduct,
  Omit<IProduct, "id">,
  { rejectValue: string }
>("products/createProduct", async (productData, { rejectWithValue }) => {
  try {
    const createdProduct = await createProduct(productData as IProduct);
    toast.success(toastMessages.productsMessages.PRODUCT_CREATED);
    return createdProduct;
  } catch (error) {
    const errorMessage = errorsHandling(
      createProduct_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const updateProductThunk = createAsyncThunk<
  IProduct,
  IProduct,
  { rejectValue: string }
>("products/updateProduct", async (productData, { rejectWithValue }) => {
  try {
    const updatedProduct = await updateProduct(productData.id, productData);
    toast.success(toastMessages.productsMessages.PRODUCT_UPDATED);
    return updatedProduct;
  } catch (error) {
    const errorMessage = errorsHandling(
      updateProduct_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const deleteProductThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("products/deleteProduct", async (productId, { rejectWithValue }) => {
  try {
    await deleteProduct(productId);
    toast.success(toastMessages.productsMessages.PRODUCT_DELETED);
    return productId;
  } catch (error) {
    const errorMessage = errorsHandling(
      deleteProduct_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});
