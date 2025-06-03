import { IProduct } from '../product/productTypes';
import { IBrand } from '../brand/brandTypes';
import { ICategory } from '../category/categoryTypes';
import { IOrder } from '../order/orderTypes';

export interface INavigationItem {
  label: string;
  value: number;
}

export interface EditToolbarProps<T extends IProduct | IBrand | ICategory | IOrder> {
  onAdd: () => void;
  canAdd?: boolean;
  navigation?: {
    items: INavigationItem[];
    value: number;
    onChange: (value: number) => void;
  };
}
