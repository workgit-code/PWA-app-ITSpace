import React from "react";
import GalaxyOptions from "./GalaxyOptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Planets from "./Planets";

function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={"/"} exact element={<GalaxyOptions />} />
          <Route path={"/planets"} exact element={<Planets />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default Routing;
