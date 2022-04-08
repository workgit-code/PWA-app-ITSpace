import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Planets from "./components/Planets";
// import SkyBox from "./components/SkyBox";
// import CameraControls from "./components/CameraControls";

function App() {
  return (
    <div className="App">
      <Planets />
    </div>
  );
}

export default App;
