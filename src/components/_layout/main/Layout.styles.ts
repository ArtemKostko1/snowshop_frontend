import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "#f1f1f1", // замените на нужный цвет
    minHeight: "100vh !important",
  },
  adminContent: {
    minHeight: "calc(100vh - 64px) !important",
    maxWidth: "1920px",
    backgroundColor: "#f1f1f1",
    padding: "24px",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  mainContent: {
    minHeight: "calc(100vh - 64px) !important",
    maxWidth: "1140px",
    backgroundColor: "#f1f1f1",
    padding: "24px",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
}));
