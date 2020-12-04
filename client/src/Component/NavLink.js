import React from "react";
import { Link } from "react-router-dom";

//used for navigation link
function NavLink(props) {
  return (
    <li className="primary-menu__team-overview">
      <Link to={props.to}>{props.title}</Link>
    </li>
  );
}

export default NavLink;
