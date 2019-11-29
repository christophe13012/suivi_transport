import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const Header = props => {
  return (
    <div
      className="deep-purple"
      style={{
        color: "white",
        height: 100,
        fontWeight: "bold",
        fontSize: 35,
        padding: 20,
        marginBottom: 15
      }}
    >
      SUIVI TRANSPORT
      {props.user && (
        <div className="float-right">
          <Chip
            avatar={
              <Avatar alt={props.user.displayName} src={props.user.photoURL} />
            }
            label={props.user.displayName}
            onDelete={() => props.signOut()}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
