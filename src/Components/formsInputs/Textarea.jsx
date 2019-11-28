import React from "react";
import TextField from "@material-ui/core/TextField";

const Textarea = ({ champs }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <TextField
        style={{ width: 300 }}
        id="standard-multiline-static"
        label={champs.label}
        multiline
        rows="4"
        defaultValue=""
        margin="normal"
      />
    </div>
  );
};

export default Textarea;
