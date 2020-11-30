import react, { useState } from "react";
import "./App.scss";
import Axios from "axios";

function Registration() {
  //usestate for registration
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  //usestate for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //usestate for loginstatus
  const [loginStatus, setLoginStatus] = useState("");

  //sending register request to backend - register method
  const register = () => {
    Axios.post("http://localhost3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  //login method
  const login = () => {
    Axios.post("http://localhost3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
      console.log(response.data);
    });
  };

  return (
    <>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
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
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username.."
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

      <h1>{loginStatus}</h1>
    </>
  );
}
