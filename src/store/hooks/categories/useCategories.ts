import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function useCategories() {
  const { categories, isCategoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );

  return { categories, isCategoriesLoading };
}
