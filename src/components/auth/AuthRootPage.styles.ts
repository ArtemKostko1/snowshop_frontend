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
  loginForm: {
    width: 500,
    "@media (max-width: 960px)": {
      width: "50%",
      padding: 0,
    },
    "@media (max-width: 600px)": {
      width: "75%",
      padding: 0,
    },
    "& button": {
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));
