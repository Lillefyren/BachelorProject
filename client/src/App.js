import React from "react";
import "./App.scss";
import Cart from "./card.js";
import Navigation from "./Navigation.js";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello Word</h1>

        <Cart />
        <Navigation />
      </div>
    </>
  );
}

export default App;
