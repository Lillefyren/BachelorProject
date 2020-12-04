import React from "react";
import { Link } from "react-router-dom";

//used for navigation link
function NavLink(props) {
  return <Link to={props.to}>{props.title}</Link>;
}

export default NavLink;
