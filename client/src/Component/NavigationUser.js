import React from "react";
import NavUl from "./NavUl";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { TokenContext } from "./TokenProvider";

//navigation for user
function NavigationUser() {
  const { handleRemoveToken } = React.useContext(TokenContext);

  return (
    <>
      <NavUl>
        <NavItem>
          <NavLink to={"/Home"} title="Holdoversigt" />
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
        <NavItem>
          <button onClick={() => handleRemoveToken()}>logud</button>
        </NavItem>
      </NavUl>
    </>
  );
}

export default NavigationUser;
