import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./View/Registration";
import Homepage from "./View/Homepage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />{" "}
      <Route path="/" exact render={(props) => <Homepage />} />{" "}
    </Router>
  );
}

export default App;
