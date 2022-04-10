import React from "react";
import "./App.css";
import PlanetsList from "./components/PlanetsList";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <PlanetsList />
      <Routing />
    </div>
  );
}

export default App;
