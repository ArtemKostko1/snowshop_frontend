import { useSelector } from "react-redux";
import { RootState } from "../../store";
export function useProducts() {
  const { products, isProductsLoading } = useSelector((state: RootState) => state.products);

  return { products, isProductsLoading };
}
