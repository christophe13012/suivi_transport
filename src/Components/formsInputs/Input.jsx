import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ champs }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <TextField
        id="standard-basic"
        label={champs.label}
        style={{ width: 300 }}
        type={champs.type}
      />
    </div>
  );
};

export default Input;
