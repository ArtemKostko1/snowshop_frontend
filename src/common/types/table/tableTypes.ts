import {
  GridColDef,
  GridRowId,
  GridRowModesModel,
  GridToolbarProps,
  GridValidRowModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { IProduct } from '../product/productTypes';
import { ICategory } from '../category/categoryTypes';
import { IBrand } from '../brand/brandTypes';
import { INavigationItem } from './toolbarTypes';

// Базовый интерфейс для всех типов строк
export interface IBaseRow {
  id: number | string;
  isNew?: boolean;
  [key: string]: any;
}

// Дженерик тип для строк таблицы
export type TableRow<T extends IProduct | ICategory | IBrand> = T & IBaseRow;

export interface ITableOptions<T extends IProduct | ICategory | IBrand> {
  name: string;
  table: string;
  columns: GridColDef[];
  requiredColumns: () => string[];
  data: TableRow<T>[];
  pageSize: number;
  pageSizeOptions: number[];
  rowHeight: number;
  isLoading: boolean;
  defaultSort?: GridSortModel;
  fieldsInitial?: Partial<T>;
  canEdit?: boolean;
  canDelete?: boolean;
  canAdd?: boolean;
  navigation?: {
    items: INavigationItem[];
    value: number;
    onChange: (value: number) => void;
  };
}

export interface IDataTable<T extends IProduct | ICategory | IBrand> {
  tableOptions: ITableOptions<T>;
  createFunction: (row: Omit<T, 'id' | 'isNew'>) => Promise<T>;
  updateFunction: (row: T) => Promise<T>;
  deleteFunction: (id: number) => Promise<void>;
}

export interface IActionsColumn {
  rowModesModel: GridRowModesModel;
  handleSaveClick: (id: GridRowId) => () => void;
  handleCancelClick: (id: GridRowId) => () => void;
  handleEditClick: (id: GridRowId) => () => void;
  handleDeleteClick: (id: GridRowId) => () => void;
  canEdit?: boolean;
  canDelete?: boolean;
}
