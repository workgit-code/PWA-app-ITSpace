import { React, useState, useEffect } from "react";
import Planet1 from "../images/Planet1.png";
import Planet2 from "../images/Planet2.png";
import Planet3 from "../images/Planet3.png";
import Planet4 from "../images/Planet4.png";
import Planet5 from "../images/Planet5.png";
import Planet6 from "../images/Planet6.png";
import Planet7 from "../images/Planet7.png";
import Planet8 from "../images/Planet8.png";
import Planet9 from "../images/Planet9.png";
import Planet10 from "../images/Planet10.png";
import Planet11 from "../images/Planet11.png";
import Planet12 from "../images/Planet12.png";
import Planet13 from "../images/Planet13.png";
import Planet14 from "../images/Planet14.png";
import Planet15 from "../images/Planet15.png";
import "../stylesheets/Planets.css";
import PlanetRow from "./PlanetRow";
import PlanetItem from "./PlanetItem";
import usePhoneRotation from "../hooks/usePhoneRotation.js";

const planetsList = [
  {
    name: "HTML-ius",
    img: `${Planet1}`,
  },
  {
    name: "React-us",
    img: `${Planet2}`,
  },
  {
    name: "Python-ous",
    img: `${Planet3}`,
  },
  {
    name: "JavaScript-us",
    img: `${Planet4}`,
  },
  {
    name: "PHP-lius",
    img: `${Planet5}`,
  },
  {
    name: "Java-rius",
    img: `${Planet6}`,
  },
  {
    name: "Java-rius1",
    img: `${Planet7}`,
  },
  {
    name: "Java-rius2",
    img: `${Planet8}`,
  },
  {
    name: "Java-rius3",
    img: `${Planet9}`,
  },
  {
    name: "Java-rius4",
    img: `${Planet10}`,
  },
  {
    name: "Java-rius5",
    img: `${Planet11}`,
  },
  {
    name: "Java-rius6",
    img: `${Planet12}`,
  },
  {
    name: "Java-rius7",
    img: `${Planet13}`,
  },
  {
    name: "Java-rius8",
    img: `${Planet14}`,
  },
  {
    name: "Java-rius9",
    img: `${Planet15}`,
  },
];

function PlanetsList() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const phoneRotation = usePhoneRotation();
  const [currPhonePos, setCurrPhonePos] = useState(phoneRotation.alpha);
  const [prevPhonePos, setPrevPhonePos] = useState(phoneRotation.alpha);

  const [triggerAnimation, setTriggerAnimation] = useState(1);

  const [isPlanetOpen, setPlanetOpen] = useState(false);

  const managePlanetState = (planetState) => {
    setPlanetOpen(planetState);
    console.log(planetState);
  };

  useEffect(() => {
    setCurrPhonePos(phoneRotation.alpha);
    if (
      prevPhonePos !== phoneRotation.alpha &&
      Math.abs(phoneRotation.alpha - prevPhonePos) >= 20
    ) {
      if (phoneRotation.alpha >= 45) {
        // 0, 2, 3, 4, 5    10 11 12 14 15
        if (endIndex >= planetsList.length) {
          setStartIndex(0);
          setEndIndex(3);
        } else {
          setStartIndex(endIndex);
          setEndIndex(endIndex + 3);
        }
      } else if (phoneRotation.alpha <= -45) {
        if (startIndex === 0 && endIndex === 3) {
          if (planetsList.length % 3 === 0) {
            setStartIndex(planetsList.length - 3);
            setEndIndex(planetsList.length);
          } else {
            const decreaser = planetsList.length % 3;
            setStartIndex(planetsList.length - decreaser);
            setEndIndex(planetsList.length);
          }

          // 15 % 5 == 0  ; 16 % 5 == 1  ;  17 % 5 == 2

          // 0, 2, 3, 4, 5    10 11 12 14 15   0, 2, 3, 4, 5    10 11 12 14 15  23
        } else {
          setEndIndex(startIndex);
          setStartIndex(startIndex - 3);

          //  5 - 10
        }
      }
      setTriggerAnimation(1);
      setPrevPhonePos(currPhonePos);
    }
  }, [phoneRotation.alpha]);

  return (
    <div>
      {!isPlanetOpen ? (
        <div
          className="PlanetsContainer"
          triggerAnimation={triggerAnimation}
          onAnimationEnd={() => setTriggerAnimation(0)}
        >
          {planetsList.slice(startIndex, endIndex).map((planet, index) => {
            const planetClassName =
              (index + 1) % 2 === 0 ? "even-planet" : "odd-planet";
            return (
              <PlanetRow
                key={index}
                planet={planet}
                planetIndex={index}
                planetClassName={planetClassName}
                managePlanetState={managePlanetState}
              />
            );
          })}
          <div className="phone-icon">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
        </div>
      ) : (
        <PlanetItem />
      )}
    </div>
  );
}

export default PlanetsList;
