import { getApiUrl } from "../url/env.config";

export const API_URL = getApiUrl();

export const API_PREFIX = "/api";
export const LOGIN = `${API_PREFIX}/auth/login`;
export const REGISTER = `${API_PREFIX}/auth/register`;
export const PRODUCTS = `${API_PREFIX}/products`;
export const CATEGORIES = `${API_PREFIX}/categories`;
export const BRANDS = `${API_PREFIX}/brands`;
export const USERS = `${API_PREFIX}/users`;

const API = {
  API_URL,
  API_PREFIX,
  LOGIN,
  REGISTER,
  PRODUCTS,
  CATEGORIES,
  BRANDS,
  USERS,
};

export default API;
