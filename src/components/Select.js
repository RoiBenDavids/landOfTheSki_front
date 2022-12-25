import { React } from "../common";

import { InputLabel, MenuItem, Select as MUISelect } from "@mui/material";

const Select = ({ label, value, handleChange, options }) => {
  const onHandleChange = (event) => {
    handleChange(event.target.value);
  };
  return (
    <div>
      <InputLabel id="select-1">{label}</InputLabel>
      <MUISelect
        labelId="select-1"
        id="select-1"
        value={value}
        label={label}
        onChange={onHandleChange}
      >
        {options.map((option, key) => (
          <MenuItem key={key} value={option}>
            {option}
          </MenuItem>
        ))}
      </MUISelect>
    </div>
  );
};

export default Select;
