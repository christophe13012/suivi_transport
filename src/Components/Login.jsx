import React from "react";
import { MDBBtn } from "mdbreact";
import { withRouter } from "react-router-dom";

const Login = props => {
  React.useEffect(() => {
    if (props.user) props.history.push("/");
  });
  return (
    <MDBBtn
      color="pink"
      className="ml-5 mt-3"
      onClick={() => props.signInWithGoogle()}
    >
      Se connecter avec GOOGLE
    </MDBBtn>
  );
};

export default withRouter(Login);
