import { SelectChangeEvent } from "@mui/material";

export interface SelectDefaultOption {
  value: string | number;
  label: string;
}

export interface SelectDefaultProps {
  label: string;
  value: string | number;
  options: SelectDefaultOption[];
  onChange: (event: SelectChangeEvent<string | number>) => void;
  disabled?: boolean;
}
