import { React, useState } from "react";

function PlanetRow({
  planet,
  planetIndex,
  planetClassName,
  managePlanetState,
}) {
  const openPlanet = () => {
    managePlanetState(true);
    console.log("im in here!")
  };

  return (
    <div
      id={`Planet${planetIndex + 1}`}
      className={`Planet ${planetClassName}`}
      onClick={openPlanet}>
      <img src={planet.img} alt="Planet missing" />
      <p>{planet.name}</p>
    </div>
  );
}

export default PlanetRow;
