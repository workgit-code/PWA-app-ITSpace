import React from "react";
import Planet1 from "../images/Planet1.png";
import Planet2 from "../images/Planet2.png";
import Planet3 from "../images/Planet3.png";
import "../stylesheets/Planets.css";

function Planets() {
  return (
    <div className="PlanetsContainer">
      <div className="Planet ">
        <img src={Planet1} alt="" />
      </div>
      <div id="Planet2" className="Planet">
        <img src={Planet2} alt="" />
      </div>
      <div className="Planet">
        <img src={Planet1} alt="" />
      </div>
      <div className="Planet">
        <img src={Planet2} alt="" />
      </div>
      <div className="Planet">
        <img src={Planet2} alt="" />
      </div>
      <div className="Planet">
        <img src={Planet2} alt="" />
      </div>
    </div>
  );
}

export default Planets;
