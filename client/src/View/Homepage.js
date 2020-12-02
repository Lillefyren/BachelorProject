import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Homepage() {
  const [role, setRole] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        //setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      <h1>Welcome user</h1>
      <h1>Welcome admin</h1>
    </div>
  );
}
