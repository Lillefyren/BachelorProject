import React from "react";
import Dashboard from "./View/Dashboard";
import "./App.scss";
import NotAuthenticatedApp from "./Component/NotAuthenticatedApp";
import { TokenContext } from "./Component/TokenProvider";

function App() {
  const { token } = React.useContext(TokenContext); //henter token
  return token ? <Dashboard /> : <NotAuthenticatedApp />;
}

export default App;
