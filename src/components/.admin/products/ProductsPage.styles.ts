import makeStyles from "@mui/styles/makeStyles";

//Цветовая палитра (theme/palette) меняется в зависимости от активной темы приложения (~/src/assets/themes)

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "calc(100vh - 112px)",
    width: "100%",
  },
  productTable: {
    height: "100%",
    overflow: "auto",
  },
}));
