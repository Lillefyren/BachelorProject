import React from "react";
import { Col } from "react-bootstrap";
import Axios from "axios";
//import { TokenContext } from "./TokenProvider";

function TopBar(props) {
  Axios.get("http://localhost:3001/user/id").then((res) => {
    //const user = res.data;
    //const userName = user.UserFirstName + user.UserLastName;
    //console.log(userName);
  });
  return (
    <Col>
      <div>{props.children}</div>
    </Col>
  );
}

export default TopBar;
