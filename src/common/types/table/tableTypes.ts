import { GridColDef, GridRowModesModel } from "@mui/x-data-grid";

export interface IProductTable {
  createProduct: (value: string) => void;
  updateProduct: (value: string) => void;
  deleteProduct: (value: string) => void;
}

export interface ITableRow {
  id: string;
  isNew?: boolean;
  [key: string]: any;
}

export interface ITableOptions {
  name: string;
  data: ITableRow[];
  table: string;
  addingRows: boolean;
  isLoading: boolean;
  rowHeight: number;
  pageSize: number;
  pageSizeOptions: number[];
  columns: GridColDef[];
  fieldsInitial: Partial<ITableRow>;
  requiredColumns: () => string[];
}

export interface IEditToolbar {
  tableName: string;
  addingRows: boolean;
  fieldsInitial: Partial<ITableRow>;
  setRows: React.Dispatch<React.SetStateAction<ITableRow[]>>;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
}

export interface IDataTable {
  tableOptions: ITableOptions;
  createFunction: (row: Omit<ITableRow, "id" | "isNew">) => Promise<any>;
  updateFunction: (row: ITableRow) => Promise<any>;
  deleteFunction: (id: string) => Promise<void>;
}

export interface IActionsColumn {
  rowModesModel: GridRowModesModel;
  handleSaveClick: (id: string) => () => void;
  handleCancelClick: (id: string) => () => void;
  handleEditClick: (id: string) => () => void;
  handleDeleteClick: (id: string) => () => void;
}
