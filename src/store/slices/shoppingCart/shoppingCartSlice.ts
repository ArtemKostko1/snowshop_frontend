import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../common/types/product/productTypes';

interface CartItem {
  product: IProduct;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  totalItems: JSON.parse(localStorage.getItem('cart') || '[]').reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0,
  ),
};

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find((item) => item.product.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((item) => item.product.id === productId);
      if (item) {
        if (quantity < 1) {
          state.items = state.items.filter((item) => item.product.id !== productId);
        } else {
          item.quantity = quantity;
        }
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
