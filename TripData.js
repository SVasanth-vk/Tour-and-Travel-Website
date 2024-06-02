// TripData.js
import "./TripStyles.css";
import Trip from "./Trip";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
      <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <center>
      <div className="highlight">
      <h6>{props.highlight}</h6>
      </div>
      </center>
      <b>{props.day1}</b>
      <p>{props.place1}</p>
      <b>{props.day2}</b>
      <p>{props.place2}</p>
      <b>{props.day3}</b>
      <p>{props.place3}</p>
      
    </div>
  );
}

export default TripData;