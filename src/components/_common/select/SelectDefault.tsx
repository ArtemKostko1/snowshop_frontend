import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import {
  SelectDefaultProps,
  SelectDefaultOption,
} from "../../../common/types/select/selectDefaultTypes";

const SelectDefault: React.FC<SelectDefaultProps> = ({
  label,
  value,
  options,
  onChange,
  disabled,
  width,
}) => {
  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        className="select-default"
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        sx={{ width: width }}
      >
        {options.map((option: SelectDefaultOption, index: number) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDefault;
