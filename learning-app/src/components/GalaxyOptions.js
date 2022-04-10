import { React, useState } from "react";
import WebDevGalaxy from "../images/WebDevGalaxy.png";
import Carousel from "react-hook-carousel";
import "../stylesheets/Carousel.scss";

const slider = [
  { title: "Web Dev Galaxy", image: WebDevGalaxy, alt: "alt image1" },
  { title: "AI Galaxy", image: WebDevGalaxy, alt: "alt image2" },
  { title: "Mobile Dev Galaxy", image: WebDevGalaxy, alt: "alt image3" },
];

function GalaxyOptions() {
  const [active, setActive] = useState(0);

  const next = () => {
    if (active === slider.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active === 0) {
      setActive(slider.length - 1);
    } else {
      setActive(active - 1);
    }
  };
  return (
    <div className="carousel-container-parent">
      <div className="carousel-container">
        <div className="carousel-arrows" onClick={prev}>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div>
          <p>{slider[active].title}</p>
          <img src={slider[active].image} alt={slider[active].alt} />
        </div>
        <div className="carousel-arrows" onClick={next}>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default GalaxyOptions;