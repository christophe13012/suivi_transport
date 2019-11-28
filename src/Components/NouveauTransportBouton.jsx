import React from "react";
import { MDBBtn } from "mdbreact";
import { withRouter } from "react-router-dom";

const NouveauTransportBouton = props => {
  return (
    <MDBBtn
      className="ml-3"
      color="pink"
      onClick={() => props.history.push("/nouveau")}
    >
      Enregistrer un nouveau transport
    </MDBBtn>
  );
};

export default withRouter(NouveauTransportBouton);
