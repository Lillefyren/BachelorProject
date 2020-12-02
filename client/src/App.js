import React from "react";
import "./App.scss";
import Cart from "./card.js";
import Navigation from "./Navigation.js";
import Registration from "./registration.js";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello Word</h1>
        <Cart />
        <Navigation />
        <Registration />
      </div>
    </>
  );
}

export default App;
