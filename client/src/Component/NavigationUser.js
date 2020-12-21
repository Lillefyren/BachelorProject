import React from "react";
import NavUl from "./NavUl";
import NavItem from "./NavItem";
import { TokenContext } from "./TokenProvider";
import NavLinks from "./NavLinks";

//navigation for user
function NavigationUser() {
  const { handleRemoveToken } = React.useContext(TokenContext);

  return (
    <>
      <NavUl>
        <img src="../img/jord-logo.png" alt="logo" width="500" height="600" />
        <NavItem>
          <NavLinks to={"/Home"} title="Holdoversigt" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Yourteam"} title="Dine hold" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Waitinglist"} title="Venteliste" />
        </NavItem>
        <NavItem>
          <NavLinks to={"/Profileinformation"} title="Profiloplysninger" />
        </NavItem>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>logud</button>
        </NavItem>
      </NavUl>
    </>
  );
}

export default NavigationUser;
