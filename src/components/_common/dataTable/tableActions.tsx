import React from 'react';
import { GridRowModes, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import appToolltips from '../../../common/constants/tooltips';
import { IActionsColumn } from '../../../common/types/table/tableTypes';

export const getActionsColumn = ({
  rowModesModel,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
  canEdit = true,
  canDelete = true,
  customActions,
}: IActionsColumn): GridColDef => ({
  field: 'actions',
  headerName: 'Инструменты',
  type: 'actions',
  align: 'center',
  headerAlign: 'center',
  cellClassName: 'actions',
  sortable: false,
  width: 150,

  // Объявление функциональных кнопок в колонке инструментов
  getActions: ({ id }) => {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return [
        <Tooltip key={`save-${id}`} title={appToolltips.systemToolltips.SAVE}>
          <GridActionsCellItem
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
            color="primary"
          />
        </Tooltip>,
        <Tooltip key={`cancel-${id}`} title={appToolltips.systemToolltips.CANCEL}>
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="default"
          />
        </Tooltip>,
      ];
    }

    const actions = [];

    // Добавляем кнопку просмотра товаров в заказе, если она определена
    if (customActions?.viewOrderProducts) {
      actions.push(
        <Tooltip key={`view-${id}`} title="Просмотреть товары">
          <GridActionsCellItem
            icon={<VisibilityIcon color="primary" />}
            label="View Products"
            onClick={() => customActions.viewOrderProducts?.(Number(id))}
            color="default"
          />
        </Tooltip>,
      );
    }

    if (canEdit) {
      actions.push(
        <Tooltip key={`edit-${id}`} title={appToolltips.systemToolltips.EDIT}>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="primary"
          />
        </Tooltip>,
      );
    }

    if (canDelete) {
      actions.push(
        <Tooltip key={`delete-${id}`} title={appToolltips.systemToolltips.DELETE}>
          <GridActionsCellItem
            icon={<DeleteIcon sx={{ color: 'error.main' }} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="default"
          />
        </Tooltip>,
      );
    }

    return actions;
  },
});
