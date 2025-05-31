import { instance } from "../utils/axios/axios";
import { CATALOG } from "../utils/axios/apiRoutes";

export const getAllCatalogProducts = async () => {
  try {
    const response = await instance.get(CATALOG);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async (categoryName: string) => {
  try {
    const response = await instance.get(`${CATALOG}/category/${categoryName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductByArticleRoute = async (articleRoute: string) => {
  try {
    const response = await instance.get(`${CATALOG}/${articleRoute}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
