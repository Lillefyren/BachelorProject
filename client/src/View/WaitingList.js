import React, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import axios from "../AxiosConfig";
import { TokenContext } from "../Component/TokenProvider";
import cardphoto from "../img/cardphoto.jpg";

function WaitingList() {
  //usestate for course creation
  const [data, setData] = useState([]);
  const { userAdmin } = React.useContext(TokenContext);

  Axios.defaults.withCredentials = true;

  //find course table
  useEffect(() => {
    axios.get("/getcourses").then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []);
  return (
    <Col className="waitinglist">
      <h2>Venteliste</h2>

      <h4>Hold</h4>

      {data.map((course) => {
        return (
          <div className="Card">
            <div className="Card__header">
              <img className="Card__image" src={cardphoto} alt="cardphoto" />
            </div>
            <Col className="Card__body">
              <h2 className="Card__title">{course.CourseTitle}</h2>
              <p className="Card__instructor">{course.CourseInstructorNames}</p>
              <p className="Card__price">DKK {course.CoursePrice}</p>
              <p className="Card__spaces">0 / {course.CourseSpaces}</p>
              <p className="Card__start-date">{course.CourseStartDate}</p>
              <p className="Card__end-date">{course.CourseEndDate}</p>

              <Row className="Card__btn-wrapper">
                {userAdmin === 1 ? (
                  <button className="Card__btn">Rediger</button>
                ) : (
                  <button className="Card__btn">Tilmeld</button>
                )}
              </Row>
            </Col>
          </div>
        );
      })}
    </Col>
  );
}

export default WaitingList;
