import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const AppLoadingButton = ({ buttonName, handleClick, loading }) => {
  return (
    <LoadingButton
      loading={loading}
      variant="contained"
      color="primary"
      onClick={(event) => {
        if (validate(username, password)) {
          event.preventDefault();
          handleClick();
        }
      }}
    >
      <span>{buttonName}</span>
    </LoadingButton>
  );
};

export default AppLoadingButton;
