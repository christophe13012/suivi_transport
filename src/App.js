import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nouveau from "./Components/Nouveau";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Components/Login";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvD-ni_MXMefxJHycZaofBOlWILOU2bv8",
  authDomain: "suivi-transport.firebaseapp.com",
  databaseURL: "https://suivi-transport.firebaseio.com",
  projectId: "suivi-transport",
  storageBucket: "suivi-transport.appspot.com",
  messagingSenderId: "278678416817",
  appId: "1:278678416817:web:66fcf1631eb8a75fcfa190"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <Header {...props} />
      <Switch>
        <Route
          path="/nouveau"
          render={() => (props.user ? <Nouveau /> : <Login {...props} />)}
        />
        <Route path="/login" render={() => <Login {...props} />} />
        <Route
          path="/"
          render={() => (props.user ? <Home /> : <Login {...props} />)}
        />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
