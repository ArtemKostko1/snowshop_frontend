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
    //backgroundColor: `${theme.palette.background.paper} !important`,
    backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)) !important",

    "& .MuiDataGrid-toolbarContainer": {
      height: "48px"
    },

    "& .MuiDataGrid-columnHeaders": {
      // Высота строки заголовков полей
      height: "48px !important",
      minHeight: "48px !important",
      maxHeight: "48px !important",
    },

    "& .MuiDataGrid-columnHeader": {
      // Высота ячейки конкретного заголовка поля
      height: "48px !important",
      minHeight: "48px !important",
      maxHeight: "48px !important",
      lineHeight: "48px !important"
    },
  },
}));
