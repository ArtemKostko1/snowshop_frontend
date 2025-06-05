import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function useOrders() {
  const { orders, userOrders, isOrdersLoading, isUserOrdersLoading } = useSelector(
    (state: RootState) => state.orders,
  );

  return { orders, userOrders, isOrdersLoading, isUserOrdersLoading };
}
