import react, { useEffect, useState } from "react";
import "../App.scss";
import Axios from "axios";

function CourseOverview() {
  //usestate for course creation
  const [data, setData] = useState([]);

  Axios.defaults.withCredentials = true;

  //find course table
  useEffect(()=>{
    Axios.get("http://localhost:3001/user").then((response) => {
      setData(response.data);
    console.log(response);
    })
  }, [])
console.log("okok");
  return (
    <>
      <div className="overview">
        {data.map((course)=>{return(
          <div>{course.UserEmail} </div>
        )})}
      </div>
    </>
  );
}

export default CourseOverview;
