//  Trip.js
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/kerala.jpg";
import Trip2 from "../assets/thailand.jpg";
import Trip3 from "../assets/kashmir.jpg";
import Trip4 from "../assets/Andaman.jpg";
import Trip5 from "../assets/bali.jpg";

//  import {icon} from "fa-light fa-circle-check fa-lg";

function Trip() {
  return (
    <div className="trip">
    <p>You can trip hby enjoying bus accients and going to death</p>
    <div className="main">
      <center>
      <div className="title">
          <h2>  International Destinations!</h2>
      </div>
      </center>
      <div className="tripcard">
         <TripData
         image={Trip1}
         heading= "Kerala"
         text="Starting at ₹ 7,200"
         highlight="PACKAGE HIGHLIGHTS"
         day1="Munnar"
         place1="Tata Tea Museum,  Eravikulam national park" 
         day2="Thekkady"
         place2="Periyar Lake,  Boating" 
         day3="Alleppey"
         place3="Alappuzha Beach" 
         />
         <TripData
         image={Trip2}
         heading= "Thailand"
         text="Starting at ₹ 36,000"
         highlight="PACKAGE HIGHLIGHTS"
         day1=" Poda Island Tour"
         place1="Ko Samui, Ko Tao" 
         day2="Krabi"
         place2="Long-Tailed Boating" 
         day3="Phuket"
         place3="Phi Phi Island Tour Beach, Tiger Park Pattaya" 
         />
         
         <TripData
         image={Trip3}
         heading= "Kashmir"
         text="Starting at ₹ 5,200"
         highlight="PACKAGE HIGHLIGHTS"
         day1="Gulmarg Gondola"
         place1="Cable Car Ride" 
         day2="Srinagar"
         place2="Shankaracharya Temple, Nishat Bagh" 
         day3="Pahalgam"
         place3=" Avantipura Ruins" 
         />
         <TripData
         image={Trip4}
         heading= "Andaman"
         text="Starting at ₹ 33,200"
         highlight="PACKAGE HIGHLIGHTS"
         day1="Beaches"
         place1="Radhanagar beach, Elephant Beach" 
         day2="Port Blair"
         place2="Cellular Jail" 
         day3="Island"
         place3=" Neil Islands" 
         />
         <TripData
         image={Trip5}
         heading= "Bali"
         text="Starting at ₹ 63,200"
         highlight="PACKAGE HIGHLIGHTS"
         day1="Bali"
         place1=" Ulun Danu Temple, Handara Gate" 
         day2="Waterfalls"
         place2="Banyumala Waterfall,Wanagiri Hidden Hills" 
        //  day3="Island"
        //  place3=" Neil Islands" 
         />
       </div>
      </div>
      <div className="main">
      <center>
      <div className="title">
          <h2>  Explore the Unexplored!</h2>
      </div>
      </center>
      <div className="tripcard">
      <TripData
      image={Trip1}
      heading= "Eruope"
      text="Starting at ₹ 57000.0"
      text1="Explore diverse global destinations, each boasting unique attractions and experiences. From bustling urban centers to serene natural landscapes, these popular destinations cater to a variety of interests. Whether it’s cultural immersion, adventure or relaxation, there’s a destination for every traveller to discover and enjoy."
     //  btn="Explore"
      />
      <TripData
      image={Trip1}
      heading= "Eruope"
      text="Starting at ₹ 57000.0"
      text1="Explore diverse global destinations, each boasting unique attractions and experiences. From bustling urban centers to serene natural landscapes, these popular destinations cater to a variety of interests. Whether it’s cultural immersion, adventure or relaxation, there’s a destination for every traveller to discover and enjoy."
     //  btn="Explore"
      />
      
      <TripData
      image={Trip2}
      heading= "Thailand"
      text="Starting at ₹ 57000.0"
      text1="Explore diverse global destinations, each boasting unique attractions and experiences. From bustling urban centers to serene natural landscapes, these popular destinations cater to a variety of interests. Whether it’s cultural immersion, adventure or relaxation, there’s a destination for every traveller to discover and enjoy."
     
      />
      <TripData
      image={Trip3}
      heading= "Malaysia"
      text="Starting at ₹ 57000.0"
     text1="Explore diverse global destinations, each boasting unique attractions and experiences. From bustling urban centers to serene natural landscapes, these popular destinations cater to a variety of interests. Whether it’s cultural immersion, adventure or relaxation, there’s a destination for every traveller to discover and enjoy."
     
      />
      <TripData
      image={Trip1}
      heading= "Singapore"
      text="Starting at ₹ 57000.0"
     text1="Explore diverse global destinations, each boasting unique attractions and experiences. From bustling urban centers to serene natural landscapes, these popular destinations cater to a variety of interests. Whether it’s cultural immersion, adventure or relaxation, there’s a destination for every traveller to discover and enjoy."
     
      />
        </div>
      </div>
    </div>
  );
}

export default Trip;