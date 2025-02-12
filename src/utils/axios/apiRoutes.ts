import { getApiUrl } from "../url/env.config";

export const API_URL = getApiUrl();

export const API_PREFIX = "/api";
export const LOGIN = `${API_PREFIX}/auth/login`;

const API = {
  API_URL,
  API_PREFIX,
  LOGIN,
};

export default API;
