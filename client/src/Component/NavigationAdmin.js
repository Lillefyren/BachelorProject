import React from "react";
import NavigationUI from "./NavigationUI";
import NavLink from "./NavLink";

//navigation for admin
function NavigationAdmin() {
  return (
    <>
      <NavigationUI>
        <NavLink to={"/"} title="Holdoversigt" />
        <NavLink to={"/Yourteam"} title="Dine hold" />
        <NavLink to={"/Cancelationlist"} title="Afbudsliste" />
        <NavLink to={"/Profilinformation"} title="Profiloplysninger" />
        <NavLink to={"/Createcourse"} title="Opret hold" />
        <NavLink to={"/Logout"} title="Logud" />
      </NavigationUI>
    </>
  );
}

export default NavigationAdmin;
