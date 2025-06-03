import makeStyles from "@mui/styles/makeStyles";

//Цветовая палитра (theme/palette) меняется в зависимости от активной темы приложения (~/src/assets/themes)

export const useStyles = makeStyles((theme) => ({
  productsPageContainer: {
    height: "100%",
    width: "100%",
  },
  productTable: {
    height: "calc(100vh - 112px)",
    overflow: "auto",
  },
}));
