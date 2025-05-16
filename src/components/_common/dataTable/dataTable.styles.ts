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
      lineHeight: "48px !important",
    },

    // Стили для корректного отображения singleSelect
    "& .MuiDataGrid-cell": {
      "& .MuiSelect-select": {
        height: "100% !important",
        minHeight: "unset !important",
        maxHeight: "100% !important",
        display: "flex",
        alignItems: "center",
        padding: "0 14px !important",
        lineHeight: "1 !important",
      },
      "& .MuiSelect-icon": {
        top: "50%",
        transform: "translateY(-50%)",
      },
      "& .MuiInputBase-root": {
        height: "100% !important",
        minHeight: "unset !important",
        maxHeight: "100% !important",
      },
    },

    // Стили для центрирования в режиме редактирования
    "& .cell-center": {
      "&.MuiDataGrid-cell--editing": {
        "& .MuiInputBase-root": {
          justifyContent: "center",
          "& .MuiInputBase-input": {
            textAlign: "center",
          },
        },
        "& .MuiSelect-select": {
          justifyContent: "center",
        },
      },
    },
  },
  deleteIcon: {
    color: "red",
  },
}));
