import makeStyles from "@mui/styles/makeStyles";

//Цветовая палитра (theme/palette) меняется в зависимости от активной темы приложения (~/src/assets/themes)

export const useStyles = makeStyles((theme) => ({
  dictionariesPageContainer: {
    height: "100%",
    width: "100%",
  },
  navigationContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: "12px",
  },
  navigation: { 
    backgroundColor: "transparent !important",
    height: "48px !important",
  },
  navigationAction: {
    minWidth: "100px !important",
  },
  tableContainer: {
    height: "calc(100vh - 112px)",
    overflow: "auto",
  },
}));
