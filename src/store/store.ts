import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import productsReducer from './slices/products/productsSlice';
import brandsReducer from './slices/brands/brandsSlice';
import categoriesReducer from './slices/categories/categoriesSlice';
import shoppingCartReducer from './slices/shoppingCart/shoppingCartSlice';
import catalogReducer from './slices/catalog/catalogSlice';
import ordersReducer from './slices/orders/ordersSlice';
import userReducer from './slices/users/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    shoppingCart: shoppingCartReducer,
    catalog: catalogReducer,
    orders: ordersReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
