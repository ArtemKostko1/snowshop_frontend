import { GridColDef } from "@mui/x-data-grid";

export const brandColumns = (): GridColDef[] => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Наименование",
      type: "string",
      align: "left",
      headerAlign: "left",
      editable: true,
      flex: 1,
      minWidth: 300,
    },
  ];

  return columns;
};
