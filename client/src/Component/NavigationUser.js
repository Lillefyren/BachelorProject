import React from "react";
import { Button } from "react-bootstrap";
import NavigationUI from "./NavigationUI";
import NavLink from "./NavLink";
import { TokenContext } from "./TokenProvider";

//navigation for user
function NavigationUser() {
  const { handleRemoveToken } = React.useContext(TokenContext);

  return (
    <>
      <NavigationUI>
        <button onClick={() => handleRemoveToken()}>logout</button>
        <NavLink to={"/Teamoverview"} title="Holdoversigt" />
        <NavLink to={"/Yourteam"} title="Dine hold" />
        <NavLink to={"/Waitinglist"} title="Venteliste" />
        <NavLink to={"/Profileinformation"} title="Profiloplysninger" />
        <NavLink to={"/Logout"} title="Logud" />
      </NavigationUI>
    </>
  );
}

export default NavigationUser;
