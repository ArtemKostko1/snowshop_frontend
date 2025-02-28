import { instance } from "../utils/axios/axios";
import { LOGIN } from "../utils/axios/apiRoutes";

export const login = async (data: any) => {
  try {
    const response = await instance.post(LOGIN, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
