import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";

function CreateCourse() {
  //usestate for course creation
  const [titleReg, settitleReg] = useState("");
  const [descriptionReg, setdescriptionReg] = useState("");
  const [spacesReg, setspacesReg] = useState("");
  const [startDateReg, setstartDateReg] = useState("");
  const [endDateReg, setendDateReg] = useState("");
  const [priceReg, setpriceReg] = useState("");
  const [adresseReg, setadresseReg] = useState("");
  const [pictureReg, setpictureReg] = useState("");
  const [instructorNamesReg, setinstructorNamesReg] = useState("");

  Axios.defaults.withCredentials = true;

  //sending register request to backend - register method
  const create = () => {
    Axios.post("http://localhost:3001/createcourse", {
      title: titleReg,
      description: descriptionReg,
      spaces: spacesReg,
      startDate: startDateReg,
      endDate: endDateReg,
      price: priceReg,
      address: adresseReg,
      picture: pictureReg,
      instructorNames: instructorNamesReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="createcourse">
        <h1>Skab nyt kursus</h1>
        <label>Titel</label>
        <input
          type="text"
          onChange={(e) => {
            settitleReg(e.target.value);
          }}
        />
        <label>Beskrivelse</label>
        <input
          type="text"
          onChange={(e) => {
            setdescriptionReg(e.target.value);
          }}
        />

        <label>Instruktør</label>
        <input
          type="text"
          onChange={(e) => {
            setinstructorNamesReg(e.target.value);
          }}
        />

        <label>Antal pladser</label>
        <input
          type="number"
          onChange={(e) => {
            setspacesReg(e.target.value);
          }}
        ></input>

        <label>Pris</label>
        <input
          type="text"
          onChange={(e) => {
            setpriceReg(e.target.value);
          }}
        />

        <label>Start Dato</label>
        <input
          type="date"
          onChange={(e) => {
            setstartDateReg(e.target.value);
          }}
        ></input>
        <label>Slut Dato</label>
        <input
          type="date"
          onChange={(e) => {
            setendDateReg(e.target.value);
          }}
        ></input>

        <label>Adresse</label>
        <input
          type="text"
          onChange={(e) => {
            setadresseReg(e.target.value);
          }}
        ></input>

        <label>Billede</label>
        <input
          type="text"
          onChange={(e) => {
            setpictureReg(e.target.value);
          }}
        />

        <button onClick={create}>Opret</button>
      </div>
    </>
  );
}

export default CreateCourse;
