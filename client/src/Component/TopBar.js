import React, { useEffect, useState } from "react";
import Axios from "axios";

function TopBar() {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/user").then((response) => {
      setUserName(response.data);
    });
  }, []);

  return (
    <div className="dashboard__topbar">
      {userName.map((val) => {
        return (
          <div key="kage">
            <p>{val.UserFirstName}</p>
            <p>{val.UserLastName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TopBar;
