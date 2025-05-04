import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  GridRowModes,
  DataGrid,
  Toolbar,
  GridRowEditStopReasons,
  GridRowModesModel,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { useStyles } from "./dataTable.styles";
import { russianLocaleText } from "./utils/russianLocaleText";
import { checkRequiredFields } from "./utils/checkingTableRequiredFields";
import appToolltips from "../../../assets/constants/tooltips";
import { getActionsColumn } from "./tableActions";
import {
  IDataTable,
  IEditToolbar,
  ITableRow,
} from "../../../common/types/table/tableTypes";

// Компонент EditToolbar, который представляет верхнюю панель инструментов
const EditToolbar: React.FC<IEditToolbar> = ({
  tableName,
  addingRows,
  fieldsInitial,
  setRows,
  setRowModesModel,
}) => {
  const handleAddRowClick = () => {
    // Добавление новой строки с уникальным id и начальными значениями полей
    const id = randomId();
    setRows((oldRows) => [
      {
        id,
        ...fieldsInitial,
      },
      ...oldRows,
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <Toolbar>
      <Grid container direction="row" alignItems="center">
        <Grid
          size={{ xs: 6, lg: 6 }}
          display="flex"
          justifyContent="flex-start"
        >
          <Typography variant="h6" ml={1}>
            {tableName}
          </Typography>
        </Grid>
        {addingRows && (
          <Grid
            size={{ xs: 6, lg: 6 }}
            display="flex"
            justifyContent="flex-end"
          >
            <Tooltip title={appToolltips.systemToolltips.ADD_NEW_ROW}>
              <Button
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddRowClick}
              >
                Добавить
              </Button>
            </Tooltip>
          </Grid>
        )}
      </Grid>
    </Toolbar>
  );
};

const DataTable: React.FC<IDataTable> = ({
  tableOptions,
  createFunction,
  updateFunction,
  deleteFunction,
}) => {
  const classes = useStyles();
  const [rows, setRows] = useState<ITableRow[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const tableName = tableOptions.name;
  const addingRows = tableOptions.addingRows;
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
  const handleEditClick = (id: string) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  // Обработчик события окончания редактирования строки
  const handleRowEditStop = (params: any, event: React.SyntheticEvent) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultPrevented = true;
    }
  };

  // Обработчик события кнопки отмены
  const handleCancelClick = (id: string) => () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }));

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  // Обработчик события кнопки сохранения
  const handleSaveClick = (id: string) => async () => {
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { mode: GridRowModes.View },
    }));
  };

  // Обновление или создание строки
  const handleSaveRow = async (rowData: ITableRow) => {
    // Проверка заполняемости всех обязательных полей
    const isNewRow = rowData?.isNew;
    const requiredColumns = tableOptions.requiredColumns(); // Получение списка обязательных полей

    if (!checkRequiredFields(rowData, requiredColumns)) return null;

    let success: any;
    // Проверка на новую строку
    if (isNewRow) {
      const { id, isNew, ...newRow } = rowData;
      success = await createFunction(newRow);
    } else {
      success = await updateFunction(rowData);
    }

    const updatedRow = { ...rowData, isNew: false };

    // Если ответ успешен, изменить состояние rows, иначе сохранение строки не выполняется
    if (success?.meta?.requestStatus === "fulfilled") {
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === rowData.id ? updatedRow : row))
      );
      return updatedRow;
    }
    return null;
  };

  // Обработчик события кнопки удаления
  const handleDeleteClick = (id: string) => async () => {
    await deleteFunction(id);
    setRows(rows.filter((row) => row.id !== id));
  };

  // Обработчик изменений в модели режимов строк
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box className={classes.dataGridContainer}>
      <DataGrid
        className={classes.dataGrid}
        columns={[...columns, getActionsColumn({
          rowModesModel,
          handleSaveClick,
          handleCancelClick,
          handleEditClick,
          handleDeleteClick
        })]}
        rows={rows}
        editMode="row"
        loading={tableOptions.isLoading}
        rowHeight={tableOptions.rowHeight}
        localeText={russianLocaleText}
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        //onRowClick={handleRowClick}
        processRowUpdate={(updatedRow, originalRow) =>
          handleSaveRow(updatedRow)
        }
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
        disableIgnoreModificationsIfProcessingProps={true}
        slots={{ toolbar: EditToolbar }}
        slotProps={{
          toolbar: {
            tableName,
            addingRows,
            fieldsInitial,
            setRows,
            setRowModesModel,
          },
          // basePopper: {
          //   sx: {
          //     transform: "translateY(92.5px) !important",
          //     marginLeft: "25px !important"
          //   },
          // },
        }}
      />
    </Box>
  );
};

export default DataTable;
