import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectComp = ({ champs }) => {
  return (
    <FormControl style={{ width: 300, marginTop: 20 }}>
      <InputLabel id={champs.label.split(" ")[0]}>{champs.label}</InputLabel>
      <Select
        labelId={champs.label.split(" ")[0]}
        id={champs.label.split(" ")[0]}
      >
        {champs.option.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComp;
