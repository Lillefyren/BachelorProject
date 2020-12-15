import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
function Teamoverview() {
  
  //usestate for course creation
  const [titleReg, settitleReg] = useState("");
  const [spacesReg, setspacesReg] = useState("");
  const [startDateReg, setstartDateReg] = useState("");
  const [endDateReg, setendDateReg] = useState("");
  const [priceReg, setpriceReg] = useState("");
  const [pictureReg, setpictureReg] = useState("");
  const [adresseReg, setadresseReg] = useState("");
  const [instructorNamesReg, setinstructorNamesReg] = useState("");

  Axios.defaults.withCredentials = true;

  //find course table
    Axios.get("http://localhost:3001/getcourses", {
    title: titleReg,
    spaces: spacesReg,
    startDate: startDateReg,
    endDate: endDateReg,
    adresse: adresseReg,
    price: priceReg,
    picture: pictureReg,
    instructorNames: instructorNamesReg,
    }).then((response) => {
      console.log(response);
    });

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

        <label>Adresse</label>
        <input
          type="text"
          onChange={(e) => {
            setadresseReg(e.target.value);
          }}
        ></input>

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
        <button onClick={Teamoverview}>Opret</button>
      </div>
    </>
  );
}

export default Teamoverview;

