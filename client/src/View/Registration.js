import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";

function Registration() {
  //usestate for registration
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  //usestate for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //usestate for loginstatus
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  //sending register request to backend - register method
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      firstname: firstNameReg,
      lastname: lastNameReg,
      number: numberReg,
    }).then((response) => {
      console.log(response);
    });
  };

  //login method
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        localStorage.setItem("token", response.data.token); //setting local storage token
        setLoginStatus(true);
      }
    });
  };

  //might need to delete this useEffect
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  const userAuthentication = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Fornavn</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstNameReg(e.target.value);
          }}
        ></input>
        <label>Efternavn</label>
        <input
          type="text"
          onChange={(e) => {
            setLastNameReg(e.target.value);
          }}
        ></input>
        <label>Telefonnummer</label>
        <input
          type="text"
          onChange={(e) => {
            setNumberReg(e.target.value);
          }}
        ></input>
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email.."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Pasword.."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>

      {loginStatus && (
        <button onClick={userAuthentication}> Check if authenticated</button>
      )}
    </>
  );
}

export default Registration;
