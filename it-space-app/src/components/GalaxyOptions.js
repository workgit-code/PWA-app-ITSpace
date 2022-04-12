import { React, useState } from "react";
import WebDevGalaxy from "../images/WebDevGalaxy.png";
import AIGalaxy from "../images/AIGalaxy.png";
import DesktopDevGalaxy from "../images/DesktopDevGalaxy.png";
import { Link } from "react-router-dom";
import "../stylesheets/Carousel.css";

const slider = [
  { title: "Web Dev Galaxy", image: WebDevGalaxy, alt: "alt image1" },
  { title: "AI Galaxy", image: AIGalaxy, alt: "alt image2" },
  { title: "Mobile Dev Galaxy", image: DesktopDevGalaxy, alt: "alt image3" },
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
        <div className="carousel-item">
          <p>{slider[active].title}</p>
          <Link to="/planets">
          <img src={slider[active].image} alt={slider[active].alt} />
          </Link>
        </div>
        <div className="carousel-arrows" onClick={next}>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default GalaxyOptions;
