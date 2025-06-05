import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../common/types/user/userTypes';
import {
  getUserByIdThunk,
  updateUserThunk,
  changePasswordThunk,
} from '../../thunks/users/usersThunk';

const initialState = {
  user: {} as IUser,
  isUserLoading: false,
  passwordChangeSuccess: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetPasswordChangeSuccess: (state) => {
      state.passwordChangeSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // getUserByIdThunk
    // Событие в момент выполенения запроса
    builder.addCase(getUserByIdThunk.pending, (state) => {
      state.isUserLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getUserByIdThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isUserLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getUserByIdThunk.rejected, (state) => {
      state.isUserLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // updateUserThunk
    // Событие в момент выполенения запроса
    builder.addCase(updateUserThunk.pending, (state) => {
      state.isUserLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isUserLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(updateUserThunk.rejected, (state) => {
      state.isUserLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // changePasswordThunk
    // Событие в момент выполенения запроса
    builder.addCase(changePasswordThunk.pending, (state) => {
      state.isUserLoading = true;
      state.passwordChangeSuccess = false;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(changePasswordThunk.fulfilled, (state) => {
      state.isUserLoading = false;
      state.passwordChangeSuccess = true;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(changePasswordThunk.rejected, (state) => {
      state.isUserLoading = false;
      state.passwordChangeSuccess = false;
    });
  },
});

export const { resetPasswordChangeSuccess } = userSlice.actions;

export default userSlice.reducer;
