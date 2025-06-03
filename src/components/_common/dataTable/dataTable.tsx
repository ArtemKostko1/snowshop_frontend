import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Box } from '@mui/material';
import {
  GridRowModes,
  DataGrid,
  GridRowEditStopReasons,
  GridRowModesModel,
  GridEventListener,
  GridRowId,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { useStyles } from './dataTable.styles';
import { russianLocaleText } from './utils/russianLocaleText';
import { checkRequiredFields } from './utils/checkingTableRequiredFields';
import { getActionsColumn } from './tableActions';
import { EditToolbar } from './toolbar/EditToolbar';
import { IDataTable, TableRow } from '../../../common/types/table/tableTypes';
import { IProduct } from '../../../common/types/product/productTypes';
import { IBrand } from '../../../common/types/brand/brandTypes';
import { ICategory } from '../../../common/types/category/categoryTypes';
import { IOrder } from '../../../common/types/order/orderTypes';

const DataTable = <T extends IProduct | IBrand | ICategory | IOrder>({
  tableOptions,
  createFunction,
  updateFunction,
  deleteFunction,
}: IDataTable<T>): JSX.Element => {
  const classes = useStyles();
  const [rows, setRows] = useState<TableRow<T>[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  // Настройки прав на редактирование и удаление с дефолтными значениями
  const canEdit = tableOptions.canEdit !== undefined ? tableOptions.canEdit : true;
  const canDelete = tableOptions.canDelete !== undefined ? tableOptions.canDelete : true;
  const canAdd = tableOptions.canAdd !== undefined ? tableOptions.canAdd : true;

  useEffect(() => {
    setRows(tableOptions.data as TableRow<T>[]);
  }, [tableOptions.data]);

  const columns = useMemo(() => [...tableOptions.columns], [tableOptions.columns]);

  const handleAddRow = useCallback(() => {
    if (!canAdd) return;

    const id = randomId();

    // Создаем новую строку с начальными значениями из fieldsInitial
    const newRow: TableRow<T> = {
      ...(tableOptions.fieldsInitial || {}),
      id,
      isNew: true,
    } as unknown as TableRow<T>;

    setRows((oldRows) => [newRow, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  }, [tableOptions, canAdd]);

  const handleEditClick = (id: GridRowId) => () => {
    if (!canEdit) return;

    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleSaveRow = async (newRow: TableRow<T>, oldRow: TableRow<T>) => {
    const isNewRow = newRow?.isNew;
    const requiredColumns = tableOptions.requiredColumns();

    if (!checkRequiredFields(newRow, requiredColumns)) {
      throw new Error('Заполните обязательные поля');
    }

    try {
      let success: T | null = null;
      if (isNewRow) {
        const { id, isNew, ...newRowData } = newRow;
        const result = await createFunction?.(newRowData as T);
        success = result || null;
      } else {
        const result = await updateFunction?.(newRow as T);
        success = result || null;
      }

      if (!success) {
        throw new Error('Не удалось сохранить изменения');
      }

      return success;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Неизвестная ошибка');
    }
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    if (!canDelete) return;

    try {
      await deleteFunction?.(typeof id === 'string' ? parseInt(id) : id);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Не удалось удалить запись');
    }
  };

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
            canEdit,
            canDelete,
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
        processRowUpdate={handleSaveRow}
        pageSizeOptions={tableOptions.pageSizeOptions}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: tableOptions.pageSize,
            },
          },
          sorting: {
            sortModel: tableOptions.defaultSort || [],
          },
        }}
        slots={{
          toolbar: (props) => (
            <EditToolbar<T>
              onAdd={handleAddRow}
              navigation={tableOptions.navigation}
              canAdd={canAdd}
            />
          ),
        }}
        showToolbar
      />
    </Box>
  );
};

export default DataTable;
