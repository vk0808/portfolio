import React from "react";

import Navbar from "./components/Header/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./styles/main.scss";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  );
}
