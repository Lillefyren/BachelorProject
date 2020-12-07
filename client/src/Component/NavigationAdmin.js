import React from "react";
import NavItem from "./NavItem";
import NavUl from "./NavUl";
import NavLink from "./NavLink";
import { TokenContext } from "./TokenProvider";

//navigation for admin
function NavigationAdmin() {
  const { handleRemoveToken } = React.useContext(TokenContext);
  const testing = React.useContext(TokenContext);
  //console.log(testing);
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
          <NavLink to={"/Cancelationlist"} title="Afbudsliste" />
        </NavItem>
        <NavItem>
          <NavLink to={"/Profilinformation"} title="Profiloplysninger" />
        </NavItem>
        <NavItem>
          <NavLink to={"/Createcourse"} title="Opret hold" />
        </NavItem>
        <NavItem>
          <button onClick={() => handleRemoveToken()}>logud</button>
        </NavItem>
      </NavUl>
    </>
  );
}

export default NavigationAdmin;
