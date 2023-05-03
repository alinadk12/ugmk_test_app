import React from 'react';
import FormControl from '@mui/material/FormControl';
import { default as MuiSelect } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export type OptionType = {
  value: string,
  label: string,
};

type SelectProps = {
  id: string,
  value: any,
  options: OptionType[],
};

const Select: React.FC<SelectProps> = ({ id, value, options }) => {
  return (
    <FormControl size="small">
      <MuiSelect id={id} value={value}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select;
