import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormNouveauTransport from "./FormNouveauTransport";

const Nouveau = () => {
  const [type, setType] = React.useState("");
  const handleSelectType = e => {
    setType(e.target.value);
  };
  return (
    <Paper style={{ padding: 25, width: 900, margin: "auto" }}>
      <Typography variant="h5" component="h3">
        Enregistrement d'un nouveau transport
      </Typography>
      <Typography component="div" style={{ marginTop: 15 }}>
        <FormControl
          variant="outlined"
          style={{ width: 200, marginBottom: 15 }}
        >
          <InputLabel htmlFor="outlined-age-native-simple">
            Type de dossier
          </InputLabel>
          <Select native labelWidth={120} onChange={handleSelectType}>
            <option value="" />
            <option value="france">Départ France</option>
            <option value="asie">Départ Asie</option>
            <option value="import">Importation</option>
          </Select>
        </FormControl>
        <FormNouveauTransport type={type} />
      </Typography>
    </Paper>
  );
};

export default Nouveau;
