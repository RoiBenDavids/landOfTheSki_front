import { React } from "../common";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";

const DayPicker = ({ label, value, handleChange }) => {
  return (
    <DesktopDatePicker
      label={label}
      inputFormat="DD/MM/YYYY"
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default DayPicker;
