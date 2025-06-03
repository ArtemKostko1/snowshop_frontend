import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../../slices/shoppingCart/shoppingCartSlice';
import { IProduct } from '../../../common/types/product/productTypes';
import { toast } from 'react-toastify';
import toastMessages from '../../../common/constants/toastMessages';

export const useShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.shoppingCart);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
    toast.success(toastMessages.shoppingCartMessages.PRODUCT_ADDED_TO_CART);
  };

  const handleRemoveFromCart = (productId: number, size?: string) => {
    dispatch(removeFromCart({ productId, size }));
  };

  const handleUpdateQuantity = (productId: number, quantity: number, size?: string) => {
    dispatch(updateQuantity({ productId, quantity, size }));
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
