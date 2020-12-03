import react, { useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Row, Container } from "react-bootstrap";

function Registration() {
  //usestate for registration
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  Axios.defaults.withCredentials = true;

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
    });
  };

  return (
    <>
      <Container className="registration">
        <h1 className="registration__title">Registration</h1>
        <form className="registration__form" onSubmit="">
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
          <button className="registration__btn" onClick={register}>
            Register
          </button>
        </form>
      </Container>
    </>
  );
}

export default Registration;
