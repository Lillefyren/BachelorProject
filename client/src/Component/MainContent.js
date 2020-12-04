import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../View/Dashboard";
import Login from "../View/Login";
import CreateCourse from "../View/CreateCourse";
import Teamoverview from "./Teamoverview";

//render det content der skal være på siden, i forhold til den route man er på

function MainContent(props) {
  //admin
  if (props.isAdmin) {
    return (
      <Switch>
        <Route path={"/"} exact>
          <Redirect to="/Home" />
        </Route>

        <Route path={"/Home"} exact>
          <Teamoverview />
        </Route>

        <Route path={"/Createcourse"} exact>
          <CreateCourse />
        </Route>
      </Switch>
    );
  }
  //for user
  return (
    <Switch>
      <Route path="/" exact render={(props) => <div>Hey im a user</div>} />{" "}
      <Route path="/createcourse" exact render={(props) => <CreateCourse />} />{" "}
    </Switch>
  );
}

export default MainContent;
