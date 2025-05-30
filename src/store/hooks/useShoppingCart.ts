import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../slices/shoppingCart/shoppingCartSlice';
import { IProduct } from '../../common/types/product/productTypes';

export const useShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.shoppingCart);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return {
    items: cart.items,
    totalItems: cart.totalItems,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
  };
};
