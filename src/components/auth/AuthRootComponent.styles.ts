//import styled from "@emotion/styled";
//import { Switch } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      padding: "8px", // Уменьшение отступов на маленьких экранах
    },
  },
}));
