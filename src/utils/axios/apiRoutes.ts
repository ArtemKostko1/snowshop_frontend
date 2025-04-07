import { getApiUrl } from "../url/env.config";

export const API_URL = getApiUrl();

export const API_PREFIX = "/api";
export const LOGIN = `${API_PREFIX}/auth/login`;
export const REGISTER = `${API_PREFIX}/auth/register`;

const API = {
  API_URL,
  API_PREFIX,
  LOGIN,
  REGISTER
};

export default API;
