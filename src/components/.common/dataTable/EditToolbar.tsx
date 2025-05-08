import React from "react";
import { GridRowModes, GridRowModesModel } from "@mui/x-data-grid";
import { Toolbar, Typography, Button, Tooltip, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { IEditToolbar } from "../../../common/types/table/tableTypes";
import { randomId } from "@mui/x-data-grid-generator"; // или используйте свой генератор

const EditToolbar: React.FC<IEditToolbar> = ({
  tableName,
  addingRows,
  fieldsInitial,
  setRows,
  setRowModesModel,
}) => {
  const handleAddRowClick = () => {
    const id = randomId(); // уникальный ID для новой строки
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
      <Grid container alignItems="center">
        <Grid size={{ xs: 6, lg: 6 }}>
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
            <Tooltip title="Добавить новую строку">
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

export default EditToolbar;
