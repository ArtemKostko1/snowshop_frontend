import React from "react";
import {
  GridRowModes,
  GridActionsCellItem,
  GridColDef,
} from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import appToolltips from "../../../assets/constants/tooltips";
import { IActionsColumn } from "../../../common/types/table/tableTypes";

export const getActionsColumn = ({
  rowModesModel,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
}: IActionsColumn): GridColDef => ({
  field: "actions",
  headerName: "Инструменты",
  type: "actions",
  align: "center",
  headerAlign: "center",
  cellClassName: "actions",
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
            onClick={handleSaveClick(String(id))}
            color="primary"
            //sx={{ position: "relative" }}
          />
        </Tooltip>,
        <Tooltip
          key={`cancel-${id}`}
          title={appToolltips.systemToolltips.CANCEL}
        >
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(String(id))}
            color="primary"
          />
        </Tooltip>,
      ];
    }

    return [
      <Tooltip title={appToolltips.systemToolltips.EDIT}>
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick(String(id))}
          color="primary"
        />
      </Tooltip>,
      <Tooltip title={appToolltips.systemToolltips.DELETE}>
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(String(id))}
          color="primary"
        />
      </Tooltip>,
    ];
  },
});
