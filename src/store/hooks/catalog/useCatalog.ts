import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function useCatalog() {
  const { catalogProducts, isCatalogProductsLoading, productDetails, isProductDetailsLoading } = useSelector((state: RootState) => state.catalog);

  return { catalogProducts, isCatalogProductsLoading, productDetails, isProductDetailsLoading };
}
