import React from "react";

import Navbar from "./components/Header/Navbar";
import Intro from "./components/Intro/Intro";
import "./styles/main.scss";

export default function App() {

  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
}
