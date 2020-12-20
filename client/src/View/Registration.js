import react, { useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Row, Container, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Registration() {
  //usestate for registration
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  Axios.defaults.withCredentials = true;

  const history = useHistory();

  //sending register request to backend - register method
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      email: emailReg,
      password: passwordReg,
      firstname: firstNameReg,
      lastname: lastNameReg,
      number: numberReg,
    }).then((response) => {
      console.log(response);
      alert("Tillykke din bruger er blevet oprettet");
      history.push("/login");
    });
  };

  return (
    <>
      <Container className="registration">
        <h1 className="registration__title">Registration</h1>
        <form className="registration__form">
          <label className="registration__email-label">Email</label>
          <input
            className="registration__email-input"
            type="text"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
          <label className="registration__password-label">Password</label>
          <input
            className="registration__password-input"
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <label className="registration__firstName-label">Fornavn</label>
          <input
            className="registration__firstName-input"
            type="text"
            onChange={(e) => {
              setFirstNameReg(e.target.value);
            }}
          ></input>
          <label className="registration__lastName-label">Efternavn</label>
          <input
            className="registration__lastName-input"
            type="text"
            onChange={(e) => {
              setLastNameReg(e.target.value);
            }}
          ></input>
          <label className="registration__phone-label">Telefonnummer</label>
          <input
            className="registration__phone-input"
            type="text"
            onChange={(e) => {
              setNumberReg(e.target.value);
            }}
          ></input>
          <div className="registration__btn-wrapper">
            <button className="registration-back__btn">Tilbage</button>
            <button className="registration-confirm__btn" onClick={register}>
              Register
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Registration;
