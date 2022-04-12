import React from "react";
import GalaxyOptions from "./GalaxyOptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import PlanetsList from "./PlanetsList";
import Space from "./Space";
import TopNav from "./TopNav";
import PlanetItem from "./PlanetItem";

function Routing() {
  return (
    <Router>
      <div>
      <TopNav />
        <Routes>
          <Route path={"/"} exact element={<GalaxyOptions />} />
          <Route path={"/planets"} exact element={<PlanetsList />} />
          <Route path={"/planetItem"} exact element={<PlanetItem/>} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default Routing;
