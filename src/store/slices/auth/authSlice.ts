import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../../thunks/auth/authThunk";

interface User {
  id?: number;
  email?: string;
  phoneNumber?: string;
  role?: string;
}

interface AuthState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}

interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    phoneNumber?: string;
    role: string;
  };
  status: number;
}

const getInitialUser = (): User => {
  const id = sessionStorage.getItem("id");
  const email = sessionStorage.getItem("email");
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const role = sessionStorage.getItem("role");
  return id && email && role && phoneNumber ? { id: parseInt(id), email, role, phoneNumber } : {};
};

const initialState: AuthState = {
  user: getInitialUser(),
  isAuth: !!sessionStorage.getItem("token"),
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
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("phoneNumber");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("id");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<AuthResponse | undefined>) => {
        if (action.payload) {
          state.user = {
            id: action.payload.user.id,
            email: action.payload.user.email,
            phoneNumber: action.payload.user.phoneNumber || '',
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


    builder.addCase(registerThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(
      registerThunk.fulfilled,
      (state, action: PayloadAction<AuthResponse | undefined>) => {
        if (action.payload) {
          state.user = {
            id: action.payload.user.id,
            email: action.payload.user.email,
            phoneNumber: action.payload.user.phoneNumber || '',
            role: action.payload.user.role,
          };
          state.isAuth = true;
        }
        state.isLoading = false;
      }
    );
    builder.addCase(registerThunk.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
    });
  },
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
