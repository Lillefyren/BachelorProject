import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Homepage() {
  const [role, setRole] = useState("");
  Axios.defaults.withCredentials = true;

  //whenever we try to access this page, we need to make this request.
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].isAdmin);
      }
    });
  }, []);

  return (
    <div>
      {role == 0 && <p>You're not a mod</p>}
      {role != 0 && <p>You're a mod</p>}
    </div>
  );
}
