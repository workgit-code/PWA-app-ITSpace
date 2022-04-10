import {React, useState, useEffect} from "react";
import Planet1 from "../images/Planet1.png";
import Planet2 from "../images/Planet2.png";
import "../stylesheets/Planets.css";
import PlanetRow from "./PlanetRow"
import usePhoneRotation from "../hooks/usePhoneRotation.js"


const planetsList = [
  {
    name: "HTML-ius",
    img: `${Planet1}` 
  },
  {
    name: "React-us",
    img: `${Planet1}` 
  },
  {
    name: "Python-ous",
    img: `${Planet1}` 
  },
  {
    name: "JavaScript-us",
    img: `${Planet2}` 
  },
  {
    name: "PHP-lius",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius1",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius2",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius3",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius4",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius5",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius6",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius7",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius8",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius9",
    img: `${Planet2}` 
  },
  {
    name: "Java-rius10",
    img: `${Planet2}` 
  }
]

function PlanetsList() {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(5)
  const phoneRotation = usePhoneRotation()
  const [currPhonePos, setCurrPhonePos] = useState(phoneRotation.alpha)
  const [prevPhonePos, setPrevPhonePos] = useState(phoneRotation.alpha)


  useEffect(() => {
    setCurrPhonePos(phoneRotation.alpha)
    if (prevPhonePos !== phoneRotation.alpha) {
      if(phoneRotation.alpha >= 30) {
        // 0, 2, 3, 4, 5    10 11 12 14 15
        if(endIndex >= planetsList.length){
          setStartIndex(0)
          setEndIndex(5)
        }
        else {
          setStartIndex(endIndex)
          setEndIndex(endIndex + 5)
        }
      }
      else if (phoneRotation.alpha <= -30){
        if(startIndex === 0 && endIndex === 5) {
          if(planetsList.length % 5 === 0){
            setStartIndex(planetsList.length - 4)
            setEndIndex(planetsList.length)
          }
          else {
            const decreaser = planetsList.length % 5
            setStartIndex(planetsList.length - decreaser)
            setEndIndex(planetsList.length)
          }
          

          // 15 % 5 == 0  ; 16 % 5 == 1  ;  17 % 5 == 2

          // 0, 2, 3, 4, 5    10 11 12 14 15   0, 2, 3, 4, 5    10 11 12 14 15  23
        }
        else {
          setEndIndex(startIndex)
          setStartIndex(startIndex - 5)

          //  5 - 10
        }
      }
      setPrevPhonePos(currPhonePos)
    }
  }, [phoneRotation.alpha])

  return (
    <>
    <div className="PlanetsContainer">
      {planetsList.slice(startIndex, endIndex).map((planet, index) => {
        const planetClassName = (index + 1) % 2 === 0 ? "even-planet" : "odd-planet" 
        return (
          <PlanetRow key={index} planet={planet} planetIndex={index} planetClassName={planetClassName}/>
        )
      })
      }
    </div>
    <ul>
      <li>{phoneRotation.alpha}</li>
    </ul>
    </>
  );
}

export default PlanetsList;
