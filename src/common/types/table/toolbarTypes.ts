import { IProduct } from "../product/productTypes";
import { IBrand } from "../brand/brandTypes";
import { ICategory } from "../category/categoryTypes";

export interface INavigationItem {
  label: string;
  value: number;
}

export interface EditToolbarProps<T extends IProduct | IBrand | ICategory> {
  onAdd: () => void;
  navigation?: {
    items: INavigationItem[];
    value: number;
    onChange: (value: number) => void;
  };
}
