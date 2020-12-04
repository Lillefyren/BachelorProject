import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Container, Col } from "react-bootstrap";

function Login() {
  //usestate for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //usestate for loginstatus
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  //login method
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
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

  //useeffect works when loaded.
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
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
      <Container className="login">
        <h1 className="login__title">Login</h1>
        <label className="login__email-label">Email</label>
        <input
          className="login__email-input"
          type="text"
          placeholder="Email.."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="login__password-label">Password</label>
        <input
          className="login__password-input"
          type="text"
          placeholder="Pasword.."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Col>
          <a href="">Opret bruger</a>
          <a href="">Glemt password</a>
        </Col>
        <button className="login__btn" onClick={login}>
          Login
        </button>
      </Container>

      {loginStatus && (
        <button onClick={userAuthentication}> Check if authenticated</button>
      )}
    </>
  );
}

export default Login;
