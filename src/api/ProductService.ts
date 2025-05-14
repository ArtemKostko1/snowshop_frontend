import { instance } from "../utils/axios/axios";
import { PRODUCTS } from "../utils/axios/apiRoutes";
import { IProduct } from "../common/types/product/productTypes";

export const getAllProducts = async () => {
  try {
    const response = await instance.get(PRODUCTS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId: number) => {
  try {
    const response = await instance.get(`${PRODUCTS}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData: IProduct) => {
  try {
    const response = await instance.post(`${PRODUCTS}/create`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productId: number, productData: IProduct) => {
  try {
    const response = await instance.patch(`${PRODUCTS}/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const response = await instance.delete(`${PRODUCTS}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
