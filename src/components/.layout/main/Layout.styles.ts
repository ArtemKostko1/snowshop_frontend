import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  loginContainer: {
    backgroundColor: "#f0f0f0", // замените на нужный цвет
    minWidth: "100%",
    minHeight: "calc(100vh - 64px) !important",
  },

  mainContainer: {
    backgroundColor: "#ffffff", // замените на нужный цвет
    minHeight: "100vh !important",
  },

  loginContent: {
    maxWidth: "1920px",
    minHeight: "100vh !important",
    maxHeight: "100vh",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff", // замените на нужный цвет
  },

  mainContent: {
    maxWidth: "1920px",
    height: "calc(100vh - 64px) !important",
    padding: "0",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff", // замените на нужный цвет
  },

  dispatcherMainContent: {
    maxWidth: "1920px",
    height: "calc(100vh - 64px) !important",
    padding: "24px",
    margin: "0 auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff", // замените на нужный цвет
    overflowY: "scroll",
  },
}));
