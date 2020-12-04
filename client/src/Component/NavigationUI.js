import React from "react";

//Used for navigation ul
function NavigationUI(props) {
  return <ul className="primary-menu">{props.children}</ul>;
}

export default NavigationUI;
