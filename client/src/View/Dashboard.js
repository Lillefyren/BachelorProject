import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavigationAdmin from "../Component/NavigationAdmin";
import NavigationUser from "../Component/NavigationUser";
import MainContent from "../Component/MainContent";

export default function Homepage() {
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  Axios.defaults.withCredentials = true;

  const getUserMod = () => {
    setIsLoading(true);
    Axios.get("http://localhost:3001/login")
      .then((response) => {
        if (response.data.loggedIn == true) {
          setRole(response.data.user[0].IsAdmin.data[0]);
        }
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  //whenever we try to access this page, we need to make this request.
  useEffect(() => {
    getUserMod();
  }, [role]);

  if (isLoading) {
    return <div>is loading</div>; //Dette bliver vidst, hvis der ikke er noget indhold endnu - Erstat dette med en spinner (viser ingen routes indtil man finder ud af, hvilken rolle user har)
  }

  return (
    <div>
      {role === 1 ? <NavigationAdmin /> : <NavigationUser />}
      <MainContent isAdmin={role} />
    </div>
  );
}
