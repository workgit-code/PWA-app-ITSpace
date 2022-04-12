import { React, useState, useEffect } from "react";

function PlanetItem() {
  const [user, setUser] = useState({
    name: "Benny",
    fuel: 50,
    gems: 1,
  });

  const finishTutorial = () => {
    setUser((prevState) => ({
      ...prevState,
      fuel: prevState.fuel + 5,
    }));
  };


  return (
    <div>
      <div className="fuelContainer"></div>
     <button onClick={finishTutorial}>Finish!</button>
    </div>
  );
}

export default PlanetItem;
