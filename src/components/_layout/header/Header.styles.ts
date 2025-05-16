import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  appBar: {
    width: "100vw",
  },
  adminToolbar: {
    height: "64px", // Устанавливаем фиксированную высоту Toolbar
    minHeight: "64px", // Убираем минимальную высоту по умолчанию
    maxWidth: "1920px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 24px !important",
    boxSizing: "border-box",
  },
  toolbar: {
    height: "64px", // Устанавливаем фиксированную высоту Toolbar
    minHeight: "64px", // Убираем минимальную высоту по умолчанию
    maxWidth: "1140px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 24px !important",
    boxSizing: "border-box",
  },
  tabs: {
    height: "64px", // Устанавливаем высоту Tabs на 100% от AppBar
    "& .MuiTab-root": {
      height: "64px", // Устанавливаем высоту каждого Tab на 100%
      display: "flex",
      alignItems: "center", // Центрируем текст по вертикали
    },
  },
  tab: {
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.04)",
    },
  },
}));
