import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const SelectFour = ({ champs }) => {
  const [nombre, setNombre] = React.useState(1);
  return (
    <FormControl style={{ marginTop: 20 }}>
      <InputLabel id={champs.label.split(" ")[0]}>{champs.label}</InputLabel>
      <Select
        labelId={champs.label.split(" ")[0]}
        id={champs.label.split(" ")[0]}
        style={{ width: 300 }}
        value={nombre}
        onChange={e => {
          setNombre(e.target.value);
        }}
      >
        {champs.option.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
      {[...new Array(nombre)].map((four, index) => (
        <div style={{ marginTop: 10, display: "flex" }}>
          <TextField
            id={"Fournisseur " + index}
            label={"Fournisseur " + (index + 1)}
            style={styles.four}
            type="text"
          />
          <TextField
            id={"Incoterm " + index}
            label={"Incoterm "}
            style={styles.four}
            type="text"
          />
          <TextField
            id={"palette " + index}
            label={"Nombre de palettes"}
            style={styles.four}
            type="number"
          />
          <TextField
            id={"carton " + index}
            label={"Nombre de cartons"}
            style={styles.four}
            type="number"
          />
        </div>
      ))}
    </FormControl>
  );
};

const styles = {
  four: { width: 150, marginRight: 15, marginTop: 5 }
};
export default SelectFour;
