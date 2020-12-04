import React from "react";
import NavigationUI from "./NavigationUI";
import NavLink from "./NavLink";

//navigation for admin
function NavigationAdmin() {
  return (
    <>
      <NavigationUI>
        <NavLink to={"/"} title="Dashboard" />
        <NavLink to={"/createcourse"} title="Create Course" />
      </NavigationUI>
    </>
  );
}

export default NavigationAdmin;
