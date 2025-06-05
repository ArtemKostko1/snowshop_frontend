import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import appErrors from '../../../common/constants/errors/appErrors';
import { errorsHandling } from '../_utils/errorsHandling';
import toastMessages from '../../../common/constants/toastMessages';
import { ErrorResponse } from '../../../common/types/error/errorTypes';
import { IUser } from '../../../common/types/user/userTypes';
import { IChangePasswordRequest } from '../../../common/types/user/userProfileTypes';
import { getUserById, updateUser, changePassword } from '../../../api/UserService';

const getUserById_baseError = appErrors.usersErrors.GET_USER_BY_ID;
const updateUser_baseError = appErrors.usersErrors.UPDATE_USER;
const changePassword_baseError = appErrors.usersErrors.CHANGE_PASSWORD;

export const getUserByIdThunk = createAsyncThunk<IUser, number, { rejectValue: string }>(
  'users/getUserById',
  async (userId, { rejectWithValue }) => {
    try {
      return await getUserById(userId);
    } catch (error) {
      const errorMessage = errorsHandling(getUserById_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateUserThunk = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  'users/updateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUser(userData.id, userData);
      toast.success(toastMessages.usersMessages.USER_UPDATED);
      return updatedUser;
    } catch (error) {
      const errorMessage = errorsHandling(updateUser_baseError, error as ErrorResponse);
      return rejectWithValue(errorMessage);
    }
  },
);

export const changePasswordThunk = createAsyncThunk<
  void,
  IChangePasswordRequest,
  { rejectValue: string }
>('users/changePassword', async (passwordData, { rejectWithValue }) => {
  try {
    await changePassword(passwordData);
    toast.success(toastMessages.usersMessages.PASSWORD_CHANGED);
  } catch (error) {
    const errorMessage = errorsHandling(changePassword_baseError, error as ErrorResponse);
    return rejectWithValue(errorMessage);
  }
});
