import React from "react";
import { MDBBtn } from "mdbreact";

const PanelMenu = props => {
  const labels = [
    { id: 0, name: "Dossiers en cours" },
    { id: 1, name: "Régularisation docs" },
    { id: 2, name: "Archives" }
  ];
  const [label, setLabel] = React.useState(0);
  return (
    <div>
      {labels.map(x => {
        return (
          <MDBBtn
            key={x.id}
            className="ml-1"
            color="pink"
            outline={label !== x.id ? "outline" : null}
            onClick={() => setLabel(x.id)}
          >
            {x.name}
          </MDBBtn>
        );
      })}
    </div>
  );
};

export default PanelMenu;
