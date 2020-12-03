import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./View/Homepage";
import Registration from "./View/Registration";
import Login from "./View/Login";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />{" "}
      <Route path="/" exact render={(props) => <Homepage />} />{" "}
      <Route path="/login" exact render={(props) => <Login />} />{" "}
    </Router>
  );
}

export default App;
