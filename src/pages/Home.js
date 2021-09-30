import React from "react";

import Navbar from "../components/Header/Navbar";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "../styles/main.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
