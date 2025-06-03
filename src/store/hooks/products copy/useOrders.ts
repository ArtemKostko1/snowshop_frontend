import { useSelector } from "react-redux";
import { RootState } from "../../store";
export function useOrders() {
  const { orders, isOrdersLoading } = useSelector((state: RootState) => state.orders);

  return { orders, isOrdersLoading };
}
