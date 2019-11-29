import React from "react";
import {
  ChampsFormulaireFrance,
  ChampsFormulaireAsie,
  ChampsFormulaireImport
} from "./../champsFormulaires";
import Input from "./formsInputs/Input";
import Textarea from "./formsInputs/Textarea";
import SelectComp from "./formsInputs/SelectComp";
import DateInput from "./formsInputs/DateInput";
import { MDBBtn } from "mdbreact";
import { withRouter } from "react-router-dom";
import SelectFour from "./formsInputs/SelectFour";

const FormNouveauTransport = props => {
  const returnForm = champsFormulaire => {
    return champsFormulaire.map((champs, index) => {
      if (champs.inputType === "input")
        return <Input champs={champs} key={index} />;
      if (champs.inputType === "textarea")
        return <Textarea champs={champs} key={index} />;
      if (champs.inputType === "select")
        return <SelectComp champs={champs} key={index} />;
      if (champs.inputType === "date")
        return <DateInput champs={champs} key={index} />;
      if (champs.inputType === "selectFour")
        return <SelectFour champs={champs} key={index} />;
      return null;
    });
  };
  React.useEffect(() => {}, []);
  const checkType = type => {
    if (type === "france") return returnForm(ChampsFormulaireFrance);
    if (type === "asie") return returnForm(ChampsFormulaireAsie);
    if (type === "import") return returnForm(ChampsFormulaireImport);
  };
  return (
    <form>
      {checkType(props.type)}
      {props.type !== "" && (
        <MDBBtn
          color="secondary"
          onClick={() => props.history.push("/?facture=4845372")}
        >
          enregistrer
        </MDBBtn>
      )}
      <MDBBtn color="deep-orange" onClick={() => props.history.push("/")}>
        annuler
      </MDBBtn>
    </form>
  );
};

export default withRouter(FormNouveauTransport);
