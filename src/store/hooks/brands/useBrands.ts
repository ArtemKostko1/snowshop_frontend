import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function useBrands() {
  const { brands, isBrandsLoading } = useSelector(
    (state: RootState) => state.brands
  );

  return { brands, isBrandsLoading };
}
