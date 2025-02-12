import axios from "axios";
import { API_URL } from "./apiRoutes";
import store from "../../store/store";
import { logoutAction } from "../../store/slices/auth/authSlice";

export const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {},
});

export const instanceAuth = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

instanceAuth.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instanceAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutAction());
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
