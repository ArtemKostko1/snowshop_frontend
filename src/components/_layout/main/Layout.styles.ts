import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "#f1f1f1", // замените на нужный цвет
    minHeight: "100vh !important",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    overflow: "auto",
  },
  main: {
    position: "relative",
    width: "100vw",
    height: "calc(100vh - 64px) !important",
    backgroundColor: "#f1f1f1",
    boxSizing: "border-box",
  },
  adminContent: {
    maxWidth: "1920px",
    padding: "24px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  mainContent: {
    maxWidth: "1140px",
    padding: "24px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
}));
