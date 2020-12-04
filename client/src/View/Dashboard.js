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
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].isAdmin);
      }
      setIsLoading(false);
    });
  };

  //whenever we try to access this page, we need to make this request.
  useEffect(() => {
    getUserMod();
  }, []);

  if (isLoading) {
    return <div>is loading</div>;
  }

  return (
    <div>
      {role === 1 ? <NavigationAdmin /> : <NavigationUser />}
      <MainContent isAdmin={role} />
    </div>
  );
}
