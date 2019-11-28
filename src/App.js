import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nouveau from "./Components/Nouveau";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/nouveau" component={Nouveau} />{" "}
        <Route path="/" component={Home} />{" "}
      </Switch>{" "}
      <ToastContainer />
    </div>
  );
}

export default App;
