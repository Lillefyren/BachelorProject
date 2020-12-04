import React from "react";
import NavigationUI from "./NavigationUI";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { TokenContext } from "./TokenProvider";

//navigation for user
function NavigationUser() {
  const { handleRemoveToken } = React.useContext(TokenContext);

  return (
    <>
      <NavigationUI>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>logout</button>
        </NavItem>
        <NavItem>
          <NavLink to={"/Teamoverview"} title="Holdoversigt" />
        </NavItem>
        <NavItem>
          <NavLink to={"/Yourteam"} title="Dine hold" />
        </NavItem>
        <NavItem>
          <NavLink to={"/Waitinglist"} title="Venteliste" />
        </NavItem>
        <NavItem>
          <NavLink to={"/Profileinformation"} title="Profiloplysninger" />
        </NavItem>
      </NavigationUI>
    </>
  );
}

export default NavigationUser;
