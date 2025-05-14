import {
  GridColDef,
  GridRowId,
  GridRowModesModel,
  GridToolbarProps,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { IProduct } from "../product/productTypes";

export interface ITableRow extends IProduct {
  [key: string]: any;
}

export interface ITableOptions {
  name: string;
  table: string;
  columns: GridColDef[];
  requiredColumns: () => string[];
  data: ITableRow[];
  fieldsInitial: Partial<ITableRow>;
  pageSize: number;
  pageSizeOptions: number[];
  rowHeight: number;
  isLoading: boolean;
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
  deleteFunction: (id: number) => Promise<void>;
}

export interface IActionsColumn {
  rowModesModel: GridRowModesModel;
  handleSaveClick: (id: GridRowId) => () => void;
  handleCancelClick: (id: GridRowId) => () => void;
  handleEditClick: (id: GridRowId) => () => void;
  handleDeleteClick: (id: GridRowId) => () => void;
}
