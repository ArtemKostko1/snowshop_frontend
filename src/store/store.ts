import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import productsReducer from "./slices/products/productsSlice";
import brandsReducer from "./slices/brands/brandsSlice";
import categoriesReducer from "./slices/categories/categoriesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
