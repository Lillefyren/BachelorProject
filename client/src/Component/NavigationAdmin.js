import React from "react";
import NavigationUI from "./NavigationUI";
import NavLink from "./NavLink";

//navigation for admin
function NavigationAdmin() {
  return (
    <>
      <NavigationUI>
        <Navlink to={"/"} title="Dashboard" />
      </NavigationUI>
    </>
  );
}

export default NavigationAdmin;
