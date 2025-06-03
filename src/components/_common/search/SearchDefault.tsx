import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchDefaultProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchDefault: React.FC<SearchDefaultProps> = ({
  label,
  value,
  onChange,
  disabled,
  handleKeyDown,
  placeholder,
}) => {
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
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchDefault;
