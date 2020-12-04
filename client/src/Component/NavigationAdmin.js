import React from "react";
import NavItem from "./NavItem";
import NavigationUI from "./NavigationUI";
import NavLink from "./NavLink";
import { TokenContext } from "./TokenProvider";

//navigation for admin
function NavigationAdmin() {
  const { handleRemoveToken } = React.useContext(TokenContext);
  return (
    <>
      <NavigationUI>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>logout</button>
        </NavItem>

        <NavItem>
          <NavLink to={"/"} title="Holdoversigt" />
        </NavItem>

        <NavItem>
          <NavLink to={"/Yourteam"} title="Dine hold" />
        </NavItem>

        <NavItem>
          <NavLink to={"/Cancelationlist"} title="Afbudsliste" />
        </NavItem>

        <NavItem>
          <NavLink to={"/Profilinformation"} title="Profiloplysninger" />
        </NavItem>

        <NavItem>
          <NavLink to={"/Createcourse"} title="Opret hold" />
        </NavItem>
      </NavigationUI>
    </>
  );
}

export default NavigationAdmin;
