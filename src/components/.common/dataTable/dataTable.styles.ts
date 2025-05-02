import makeStyles from "@mui/styles/makeStyles";

//Цветовая палитра (theme/palette) меняется в зависимости от активной темы приложения (~/src/assets/themes)

export const useStyles = makeStyles((theme) => ({
  dataGridContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "& .actions": {
      color: "text.secondary",
    },
    "& .textPrimary": {
      color: "text.primary",
    },
  },
  dataGrid: {
    backgroundColor: `${theme.palette.background.paper} !important`,
    backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)) !important",

    "& .MuiDataGrid-toolbarContainer": {
      height: "36.5px"
    },

    "& .MuiDataGrid-columnHeaders": {
      // Высота строки заголовков полей
      height: "34px !important",
      minHeight: "34px !important",
      maxHeight: "34px !important",
    },

    "& .MuiDataGrid-columnHeader": {
      // Высота ячейки конкретного заголовка поля
      height: "34px !important",
      minHeight: "34px !important",
      maxHeight: "34px !important",
      lineHeight: "34px !important"
    },
  },
}));
