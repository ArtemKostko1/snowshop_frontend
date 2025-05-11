import {
  GridColDef,
  GridRowModesModel,
  GridToolbarProps,
  GridValidRowModel,
} from "@mui/x-data-grid";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  brandId: string;
  size?: string;
  article: string;
  inStock: boolean;
  internalCode: string;
  description: string;
  isNew?: boolean;
  [key: string]: unknown;
}

export interface ITableRow extends IProduct {
  [key: string]: any;
}

export interface IProductTable {
  createProduct: (product: Omit<IProduct, "id" | "isNew">) => Promise<IProduct>;
  updateProduct: (product: IProduct) => Promise<IProduct>;
  deleteProduct: (id: string) => Promise<void>;
}

export interface ITableOptions {
  name: string;
  table: string;
  columns: GridColDef[];
  requiredColumns: () => string[];
  //data: ITableRow[];
  fieldsInitial: Partial<ITableRow>;
  pageSize: number;
  pageSizeOptions: number[];
  rowHeight: number;
  //isLoading: boolean;
}

export interface IEditToolbar extends GridToolbarProps {
  tableName: string;
  fieldsInitial: Partial<ITableRow>;
  setRows: (
    newRows: (
      oldRows: readonly GridValidRowModel[]
    ) => readonly GridValidRowModel[]
  ) => void;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
}

export interface IDataTable {
  tableOptions: ITableOptions;
  createFunction: (row: Omit<IProduct, "id" | "isNew">) => Promise<IProduct>;
  updateFunction: (row: IProduct) => Promise<IProduct>;
  deleteFunction: (id: string) => Promise<void>;
}

export interface IActionsColumn {
  rowModesModel: GridRowModesModel;
  handleSaveClick: (id: string) => () => void;
  handleCancelClick: (id: string) => () => void;
  handleEditClick: (id: string) => () => void;
  handleDeleteClick: (id: string) => () => void;
}
