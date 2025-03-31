import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  toolbar: {
    height: "64px", // Устанавливаем фиксированную высоту Toolbar
    minHeight: "64px", // Убираем минимальную высоту по умолчанию
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
