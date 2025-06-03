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

// Функция для создания уникального ключа товара (id + size)
const getProductKey = (product: IProduct): string => {
  return `${product.id}_${product.size || 'default'}`;
};

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
      // Ищем товар с тем же ID и размером
      const existingItemIndex = state.items.findIndex(
        (item) => getProductKey(item.product) === getProductKey(action.payload),
      );

      if (existingItemIndex >= 0) {
        // Увеличиваем количество, если товар с таким ID и размером уже есть
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Добавляем новый товар
        state.items.push({ product: action.payload, quantity: 1 });
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<{ productId: number; size?: string }>) => {
      const { productId, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.product.id === productId && item.product.size === size),
      );
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; size?: string; quantity: number }>,
    ) => {
      const { productId, size, quantity } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === productId && item.product.size === size,
      );

      if (itemIndex >= 0) {
        if (quantity < 1) {
          // Удаляем товар, если количество меньше 1
          state.items = state.items.filter((_, index) => index !== itemIndex);
        } else {
          // Обновляем количество
          state.items[itemIndex].quantity = quantity;
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
