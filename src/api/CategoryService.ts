import { instance } from "../utils/axios/axios";
import { CATEGORIES } from "../utils/axios/apiRoutes";
import { ICategory } from "../common/types/category/categoryTypes";

export const getAllCategories = async () => {
  try {
    const response = await instance.get(CATEGORIES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryById = async (categoryId: number) => {
  try {
    const response = await instance.get(`${CATEGORIES}/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (categoryData: ICategory) => {
  try {
    const response = await instance.post(`${CATEGORIES}/create`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (categoryId: number, categoryData: ICategory) => {
  try {
    const response = await instance.patch(`${CATEGORIES}/${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (categoryId: number) => {
  try {
    const response = await instance.delete(`${CATEGORIES}/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
