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
      </NavigationUI>
    </>
  );
}

export default NavigationUser;
