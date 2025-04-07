import { instance } from "../utils/axios/axios";
import { LOGIN, REGISTER } from "../utils/axios/apiRoutes";
import { ILoginForm, IRegisterData } from "../common/types/auth/authTypes";

export const login = async (data: ILoginForm) => {
  try {
    const response = await instance.post(LOGIN, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data: IRegisterData) => {
  try {
    const response = await instance.post(REGISTER, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
