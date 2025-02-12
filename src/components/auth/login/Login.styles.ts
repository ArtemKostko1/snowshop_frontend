import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  header_wrapper: {
    position: "relative",
    width: "100%",
    height: "64px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  mainIconButton: {
    height: "48px",
    width: "48px",
    "& svg": {
      fill: "#333",
      cursor: "pointer",
    },
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
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
    padding: 48,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    "@media (max-width: 960px)": {
      width: "50%",
      padding: 0,
      backgroundColor: "#f0f0f0",
    },
    "@media (max-width: 600px)": {
      width: "75%",
      padding: 0,
      backgroundColor: "#f0f0f0",
    },
    "& button": {
      width: "100%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    cursor: "pointer",
    color: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "24px",
    "@media (max-width: 960px)": {
      color: "#333",
    },
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12.5px",
    },
    "& .css-1oqtixj-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill":
      {
        borderRadius: "initial !important",
      },
    "& .MuiInputBase-input": {
      "&:-internal-autofill-selected": {
        WebkitBoxShadow: "0 0 0 100px #ffffff inset !important",
        WebkitTextFillColor: "black !important",
      },
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #ffffff inset !important",
        WebkitTextFillColor: "black !important",
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
    "& .MuiInputLabel-root": {
      "& .Mui-focused": {
        transform: "translate(14px, -6px) scale(0.75)",
      },
      "& .MuiFormLabel-filled": {
        transform: "translate(14px, -6px) scale(0.75)",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#333",
    },
    "@media (max-width: 960px)": {
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#333",
      },
    },
  },
  submitButton: {
    borderRadius: "50px !important",
  },
  errorMessage: {
    fontSize: "0.75rem",
  },
}));

export const MaterialUISwitch = styled(Switch)({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#333",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#8796A5",
    borderRadius: 20 / 2,
  },
});
