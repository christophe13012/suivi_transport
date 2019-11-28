import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DateInput = ({ champs }) => {
  console.log(champs);

  return (
    <div style={{ marginTop: 20 }}>
      <KeyboardDatePicker
        style={{ width: 300 }}
        placeholder="2018/10/10"
        format="yyyy/MM/dd"
        label={champs.label}
      />
    </div>
  );
};

export default DateInput;
