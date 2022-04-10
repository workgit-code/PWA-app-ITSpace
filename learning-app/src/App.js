import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
