import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../View/Dashboard";
import Login from "../View/Login";
import CreateCourse from "../View/CreateCourse";

function MainContent(props) {
  //admin
  if (props.isAdmin) {
    return (
      <Switch>
        <Route path="/" exact render={(props) => <Dashboard />} />{" "}
        <Route path="/login" exact render={(props) => <Login />} />{" "}
        <Route
          path="/createcourse"
          exact
          render={(props) => <CreateCourse />}
        />{" "}
      </Switch>
    );
  }
  //for user
  return (
    <Switch>
      <Route path="/" exact render={(props) => <div>Hey im a user</div>} />{" "}
      <Route path="/login" exact render={(props) => <Login />} />{" "}
      <Route path="/createcourse" exact render={(props) => <CreateCourse />} />{" "}
    </Switch>
  );
}

export default MainContent;
