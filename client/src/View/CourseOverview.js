import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";

function CourseOverview() {
  //usestate for course creation
  const [data, setData] = useState([]);

  Axios.defaults.withCredentials = true;

  //find course table
  useEffect(()=>{
    Axios.all([
    Axios.get("http://localhost:3001/getcourses"),
    Axios.get("http://localhost:3001/getsinglelessons")
  ])
    .then((response) => {
      setData(response.data);
    console.log(response);
    })
  }, [])
console.log("okok");
  return (
    <>
      <div className="overview">
        {data.map((course)=>{return(
        <div className="Card__body">
          <h2 className="Card__title">{course.CourseTitle}</h2>
          <p className="Card__instructor">{course.CourseInstructorNames}</p>
          <p className="Card__instructor">{course.CourseDescription}</p>
          <p className="Card__price">{course.CoursePrice}</p>
          <p className="Card__spaces">{course.CourseSpaces}</p>
          <p className="Card__start-date">{course.CourseStartDate}</p>
          <p className="Card__end-date">{course.CourseEndDate}</p>
        </div>
        )})}</div>
    </>
  );
}

export default CourseOverview;
