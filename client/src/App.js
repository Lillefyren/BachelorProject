import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./View/Dashboard";
import Registration from "./View/Registration";
import Login from "./View/Login";
import CreateCourse from "./View/CreateCourse";
import "./App.scss";
import NotAuthenticatedApp from "./Component/NotAuthenticatedApp";
import { TokenContext } from "./Component/TokenProvider";

function App() {
  const { token } = React.useContext(TokenContext);
  return token ? <Dashboard /> : <NotAuthenticatedApp />;
}

export default App;
