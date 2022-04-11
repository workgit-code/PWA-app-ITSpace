import React from "react";
import { React, useState, useEffect } from "react";

function PlanetItem() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter + 1);
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      });
    

  return <div><button>Finish!</button>
  <h3>{counter}</h3></div>;
}

export default PlanetItem;
