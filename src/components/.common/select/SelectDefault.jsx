import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const SelectDefault = ({ label, value, options, onChange, disabled }) => {
  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        className="select-default"
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDefault;
