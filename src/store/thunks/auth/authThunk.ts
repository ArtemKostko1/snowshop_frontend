import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../../api/AuthService";
import { toast } from "react-toastify";
import toastMessages from "../../../assets/constants/toastMessages";
import appErrors from "../../../assets/constants/errors";
import { errorsHandling } from "../_utils/errorsHandling";
import { ILoginForm, IRegisterData } from "../../../common/types/auth/authTypes";

const auth_baseError = appErrors.authErrors.AUTH_ERROR;

interface AuthResponse {
  token: string;
  user: {
    email: string;
    role: string;
  };
  status: number;
}

export const loginThunk = createAsyncThunk(
  // Это не путь запроса, а просто префикс (имя) запроса
  "auth/login",
  // Callback Функция с запросом к серверу и возвратом результата или ошибки
  async (userCredentials: ILoginForm, { rejectWithValue }) => {
    try {
      const data: AuthResponse = await login(userCredentials);
      if (data.status === 400 || data.status === 401 || data.status === 500)
        return;

      // Добавление токена и username в session storage (хранит данные в течении открытой вкладки)
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("email", data.user.email);
      sessionStorage.setItem("role", data.user.role);
      data && toast.success(toastMessages.authMessages.USER_AUTHORUZED);
      return data;
    } catch (error: any) {
      const errorMessage = errorsHandling(auth_baseError, error);
      return rejectWithValue(errorMessage);
    }
  }
);

export const registerThunk = createAsyncThunk(
  // Это не путь запроса, а просто префикс (имя) запроса
  "auth/register",
  // Callback Функция с запросом к серверу и возвратом результата или ошибки
  async (userCredentials: IRegisterData, { rejectWithValue }) => {
    try {
      const data: AuthResponse = await register(userCredentials);
      if (data.status === 400 || data.status === 401 || data.status === 500)
        return;

      // Добавление токена и username в session storage (хранит данные в течении открытой вкладки)
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("email", data.user.email);
      sessionStorage.setItem("role", data.user.role);
      data && toast.success(toastMessages.authMessages.USER_AUTHORUZED);
      return data;
    } catch (error: any) {
      const errorMessage = errorsHandling(auth_baseError, error);
      return rejectWithValue(errorMessage);
    }
  }
);
