import makeStyles from "@mui/styles/makeStyles";

export const useLoginPageStyles = makeStyles(() => ({
  logo: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  },
  textField: {
    marginTop: "0 !important",
    marginBottom: "24px !important",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  },
  incitingText: {
    color: "#1900D5",
    marginLeft: "6px",
    cursor: "pointer",
  },
}));
