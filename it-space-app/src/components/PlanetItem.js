import { React, useState, useEffect } from "react";
import "../stylesheets/PlanetItem.css"

function PlanetItem() {
  const [user, setUser] = useState({
    name: "Benny",
    fuel: 20,
    gems: 1,
  });

  const finishTutorial = () => {
    if(user.fuel <= 95) {
      setUser((prevState) => ({
        ...prevState,
        fuel: prevState.fuel + 5,
      }))
    }
  };

  const fuelStyle = (fuel) => ({
    height: `${user.fuel}%`
  })

  return (
    <div>
      <div className="planet-item-container">
        <button onClick={finishTutorial}>Finish!</button>
      </div>
      <div className="fuel-box">
        <span style={fuelStyle(user.fuel)}></span>
      </div>
    </div>
  );
}

export default PlanetItem;
