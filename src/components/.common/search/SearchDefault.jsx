import React from "react";
import { TextField } from "@mui/material";

const SearchDefault = ({ label, value, onChange, disabled, handleKeyDown }) => {
  //принимает пометку, значение и фцнкцию на событие редактирования
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      size="small"
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchDefault;
