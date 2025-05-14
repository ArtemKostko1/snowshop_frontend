import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  GridRowModes,
  DataGrid,
  GridRowEditStopReasons,
  GridRowModesModel,
  GridRowsProp,
  GridSlotProps,
  GridEventListener,
  GridRowId,
  GridValidRowModel,
  Toolbar,
  ToolbarButton,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { useStyles } from "./dataTable.styles";
import { russianLocaleText } from "./utils/russianLocaleText";
import { checkRequiredFields } from "./utils/checkingTableRequiredFields";
import appToolltips from "../../../assets/constants/tooltips";
import { getActionsColumn } from "./tableActions";
//import EditToolbar from "./EditToolbar";
import { IDataTable } from "../../../common/types/table/tableTypes";
import { IProduct } from "../../../common/types/product/productTypes";

declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel
    ) => void;
  }
}

function EditToolbar(props: GridSlotProps["toolbar"]) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows: readonly GridValidRowModel[]) => [
      ...oldRows,
      { id, isNew: true },
    ]);
    setRowModesModel((oldModel: GridRowModesModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <Toolbar>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Добавить товар
      </Button>
    </Toolbar>
  );
}

const DataTable: React.FC<IDataTable> = ({
  tableOptions,
  createFunction,
  updateFunction,
  deleteFunction,
}) => {
  const classes = useStyles();
  const [rows, setRows] = useState<IProduct[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const tableName = tableOptions.name;
  const fieldsInitial = tableOptions.fieldsInitial;

  useEffect(() => {
    // Устанавливает начальные данные строк таблицы из props
    setRows(tableOptions.data);
  }, [tableOptions.data]);

  // Неизменяемые колонки таблицы
  const columns = useMemo(
    () => [...tableOptions.columns],
    [tableOptions.columns]
  );

  // Обработчики события клика по строке
  // const handleRowClick = (params: any) => {
  //   if (tableOptions.table !== "devices") return;

  //   getRowsFunction(params.row);
  // };

  // Обработчики событий кнопок редактирования
  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  // Обработчик события окончания редактирования строки
  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  // Обработчик события кнопки отмены
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row: IProduct) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row: IProduct) => row.id !== id));
    }
  };

  // Обработчик события кнопки сохранения
  const handleSaveClick = (id: GridRowId) => async () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  // Обновление или создание строки
  const handleSaveRow = async (newRow: IProduct, oldRow: IProduct) => {
    const isNewRow = newRow?.isNew;
    const requiredColumns = tableOptions.requiredColumns(); // Получение списка обязательных полей

    if (!checkRequiredFields(newRow, requiredColumns)) {
      throw new Error("Заполните обязательные поля");
    }

    let success: IProduct | null;
    // Проверка на новую строку
    if (isNewRow) {
      const { id, isNew, ...newRowData } = newRow;
      success = await createFunction(newRowData);
    } else {
      success = await updateFunction(newRow);
    }

    if (!success) {
      throw new Error("Не удалось сохранить изменения");
    }

    return success;
  };

  // Обработчик события кнопки удаления
  const handleDeleteClick = (id: GridRowId) => async () => {
    await deleteFunction(Number(id));
    setRows(rows.filter((row: IProduct) => row.id !== id));
  };

  // Обработчик изменений в модели режимов строк
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box className={classes.dataGridContainer}>
      <DataGrid
        className={classes.dataGrid}
        columns={[
          ...columns,
          getActionsColumn({
            rowModesModel,
            handleSaveClick,
            handleCancelClick,
            handleEditClick,
            handleDeleteClick,
          }),
        ]}
        rows={rows}
        editMode="row"
        loading={tableOptions.isLoading}
        rowHeight={tableOptions.rowHeight}
        localeText={russianLocaleText}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        //onRowClick={handleRowClick}
        processRowUpdate={handleSaveRow}
        pageSizeOptions={tableOptions.pageSizeOptions}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: tableOptions.pageSize,
              //onPageSizeChange: (newPageSize) => setPageSize(newPageSize),
            },
          },
        }}
        //disableIgnoreModificationsIfProcessingProps={true}
        slots={{ toolbar: EditToolbar }}
        slotProps={{
          toolbar: {
            setRows: (
              newRows: (
                oldRows: readonly GridValidRowModel[]
              ) => readonly GridValidRowModel[]
            ) => {
              setRows(newRows(rows) as IProduct[]);
            },
            setRowModesModel,
          },
        }}
        showToolbar
      />
    </Box>
  );
};

export default DataTable;
