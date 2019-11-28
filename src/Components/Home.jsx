import React from "react";
import NouveauTransportBouton from "./NouveauTransportBouton";
import Navigation from "./Navigation";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { toast } from "react-toastify";

const Home = props => {
  React.useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    toast.warn("La facture " + parsed.facture + " a bien été mise à jour", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    props.history.push("/");
  }, []);
  return (
    <div>
      <NouveauTransportBouton />
      <Navigation />
    </div>
  );
};

export default withRouter(Home);
