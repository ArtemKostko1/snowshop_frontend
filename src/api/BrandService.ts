import { instance } from "../utils/axios/axios";
import { BRANDS } from "../utils/axios/apiRoutes";
import { IBrand } from "../common/types/brand/brandTypes";

export const getAllBrands = async () => {
  try {
    const response = await instance.get(BRANDS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBrandById = async (brandId: number) => {
  try {
    const response = await instance.get(`${BRANDS}/${brandId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBrand = async (brandData: IBrand) => {
  try {
    const response = await instance.post(`${BRANDS}/create`, brandData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBrand = async (brandId: number, brandData: IBrand) => {
  try {
    const response = await instance.patch(`${BRANDS}/${brandId}`, brandData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBrand = async (brandId: number) => {
  try {
    const response = await instance.delete(`${BRANDS}/${brandId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
