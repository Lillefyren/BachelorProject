import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./View/Dashboard";
import Registration from "./View/Registration";
import Login from "./View/Login";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route path="/registration" exact render={(props) => <Registration />} />{" "}
      <Route path="/" exact render={(props) => <Dashboard />} />{" "}
      <Route path="/login" exact render={(props) => <Login />} />{" "}
    </Router>
  );
}

export default App;
