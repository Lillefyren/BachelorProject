import React from "react";
import "./App.scss";

class Navigation extends React.Component {
  render() {
    return (
      <ul className="primary-menu">
        <li className="primary-menu__team-overview">
          <a href="">Holdoversigt</a>
        </li>
        <li className="primary-menu__your-menu">
          <a href="">Dine hold</a>
        </li>
        <li className="primary-menu__cancellation-list">
          <a href="">Afbudsliste</a>
        </li>
        <li className="primary-menu__profile-information">
          <a href="">Profiloplysninger</a>
        </li>
        <li className="primary-menu__logout">
          <a href="">Logud</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
