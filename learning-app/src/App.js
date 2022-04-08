import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Sphere from "./components/Sphere";
import SkyBox from "./components/SkyBox";
import CameraControls from "./components/CameraControls";

function App() {
  return (
    <div className="App">
      <Canvas className="canvas">
        <CameraControls />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <Suspense fallback="loading">
          <Sphere />
        </Suspense>
        <SkyBox />
      </Canvas>
    </div>
  );
}

export default App;
