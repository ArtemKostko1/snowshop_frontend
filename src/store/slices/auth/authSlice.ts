import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "../../thunks/auth/authThunk";

interface User {
  userName?: string;
  role?: string;
}

interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}

interface LoginResponse {
  token: string;
  user: {
    userName: string;
    role: string;
  };
  status: number;
}

const initialState: AuthState = {
  user: {},
  isAuth: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction(state) {
      state.user = {};
      state.isAuth = false;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("userRole");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<LoginResponse | undefined>) => {
        if (action.payload) {
          state.user = {
            userName: action.payload.user.userName,
            role: action.payload.user.role,
          };
          state.isAuth = true;
        }
        state.isLoading = false;
      }
    );
    builder.addCase(loginThunk.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
    });
  },
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
