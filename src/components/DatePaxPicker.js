import { React, styled } from "../common";
import { useState } from "react";
import DayPicker from "./DayPicker";
import moment from "moment";
import Select from "./Select";
import { Button } from "@mui/material";

const DatePaxPicker = ({ setQuery }) => {
  const [startDate, setStart] = useState(moment(Date.now()));
  const [endtDate, setEnd] = useState(moment(Date.now()));
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [skiDays, setSkiDays] = useState(1);

  return (
    <DatePaxPickerContainer>
      <DatesSelections>
        {startDate && (
          <DayPicker label="Start" value={startDate} handleChange={setStart} />
        )}
        {endtDate && (
          <DayPicker label="End" value={endtDate} handleChange={setEnd} />
        )}
      </DatesSelections>
      <PaxSelections>
        <Select
          label="Adults"
          value={adults}
          handleChange={setAdults}
          options={[0, 1, 2, 3, 4, 5]}
        />
        <Select
          label="Children"
          value={children}
          handleChange={setChildren}
          options={[0, 1, 2, 3, 4, 5]}
        />
        <Select
          label="Ski days"
          value={skiDays}
          handleChange={setSkiDays}
          options={[1, 2, 3, 4, 5, 6, 7]}
        />
      </PaxSelections>

      <Button
        onClick={() =>
          setQuery({
            dates: { start: startDate, end: endtDate },
            pax: { adult: adults, child: children },
            skiDays,
          })
        }
        variant="contained"
      >
        Find Options
      </Button>
    </DatePaxPickerContainer>
  );
};

export default DatePaxPicker;

const DatePaxPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DatesSelections = styled.div``;
const PaxSelections = styled.div`
  display: flex;
`;
