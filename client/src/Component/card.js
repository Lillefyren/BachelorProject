import React from "react";
import "./App.scss";

class Cart extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="Card__header">
          <img className="Card__image" src="" />
          <div className="Card__cross" />
        </div>
        <div className="Card__body">
          <h2 className="Card__title">Hathayoga</h2>
          <p className="Card__instructor">Signe Valentin</p>
          <p className="Card__price">DKK 1100</p>
          <p className="Card__spaces">20/20</p>
          <p className="Card__start-date">Onsdag, 11. november</p>
          <p className="Card__end-date">Onsdag, 11. december</p>
          <div
            className={"Card__btn " + (this.props.name ? "Rediger" : "Afmeld")}
          >
            Rediger
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
