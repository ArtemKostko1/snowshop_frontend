import { instanceAuth } from '../utils/axios/axios';
import { USERS } from '../utils/axios/apiRoutes';
import { IUser } from '../common/types/user/userTypes';
import { IChangePasswordRequest } from '../common/types/user/userProfileTypes';

export const getUserById = async (userId: number) => {
  try {
    const response = await instanceAuth.get(`${USERS}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: number, userData: IUser) => {
  try {
    const response = await instanceAuth.patch(`${USERS}/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwordData: IChangePasswordRequest) => {
  try {
    const response = await instanceAuth.post(`${USERS}/change-password`, passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
