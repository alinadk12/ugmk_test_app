import React from 'react';
import FormControl from '@mui/material/FormControl';
import { default as MuiSelect, SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export type OptionType = {
  value: string,
  label: string,
};

type SelectProps = {
  id: string,
  value: any,
  disabled: boolean,
  options: OptionType[],
  onChange: (event: SelectChangeEvent) => void,
};

const Select: React.FC<SelectProps> = ({ id, value, disabled, options, onChange }) => {
  return (
    <FormControl size="small" sx={{ minWidth: 155 }}>
      <MuiSelect id={id} value={value} disabled={disabled} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
