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
    picture: pictureReg,
    instructorNames: instructorNamesReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="registration">
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
        <label>Mængden af Pladser</label>
        <input
          type="number"
          onChange={(e) => {
            setspacesReg(e.target.value);
          }}
        ></input>
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
        <button onClick={create}>Opret</button>

        <label>Pris</label>
        <input
          type="text"
          onChange={(e) => {
            setpriceReg(e.target.value);
          }}
        />
        <label>Billede</label>
        <input
          type="file"
          onChange={(e) => {
            setpictureReg(e.target.value);
          }}
        />
        <label>Instruktør</label>
        <input
          type="text"
          onChange={(e) => {
            setinstructorNamesReg(e.target.value);
          }}
        />
        <button onClick={create}>Opret</button>
      </div>
    </>
  );
}

export default CreateCourse;
