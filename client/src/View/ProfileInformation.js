import React, { useEffect, useState } from "react";
import Axios from "axios";
import { TokenContext } from "../Component/TokenProvider";
import { Col } from "react-bootstrap";

function ProfileInformation() {
  const { userFirstName, userLastName, userPhoneNumber } = React.useContext(
    TokenContext
  );
  //const [profileinformation, setProfileinformation] = useState([]);
  const [firstname, setFirstname] = useState(userFirstName);
  const [lastname, setLastname] = useState([userLastName]);
  const [phonenumber, setPhonenumber] = useState([userPhoneNumber]);
  const [password, setPassword] = useState([]);

  const [profilinformation, setProfileInformation] = useState([]);

  Axios.defaults.withCredentials = true;

  //updating
  //const [] = setState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/user/get").then((response) => {
      setProfileInformation(response.data);
    });
  }, []);

  const deleteUser = (UserEmail) => {
    Axios.delete(`http://localhost:3001/user/delete/${UserEmail}`);
  };

  const updateUser = (UserEmail) => {
    Axios.put("http://localhost:3001/user/update", {
      //userName: userName;
    }).then((response) => {
      alert("updated");
    });
    setNewUserName("");
  };

  return (
    <Col className="profileinformation">
      <h2 className="profileinformation__title">Profiloplysninger</h2>
      <label className="profileinformation__firstname-label">Fornavn</label>
      <input
        className="profileinformation__firstname-input"
        type="text"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <label className="profileinformation__lastname-label">Efternavn</label>
      <input
        className="profileinformation__lastname-input"
        type="text"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <label className="profileinformation__phone-label">Telefonnummer</label>
      <input
        className="profileinformation__phone-input"
        type="text"
        value={phonenumber}
        onChange={(e) => {
          setPhonenumber(e.target.value);
        }}
      />
      <label className="profileinformation__password-label">Kodeord</label>
      <input
        className="profileinformation__password-input"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="profileinformation__btn-wrapper">
        <button
          className="profileinformation__update-btn"
          onClick={setProfileInformation}
        >
          gem
        </button>
        <button
          className="profileinformation__delete-btn"
          onClick={() => {
            deleteUser(/*val.UserEmail*/);
          }}
        >
          slet
        </button>
      </div>
    </Col>
  );
}

export default ProfileInformation;
