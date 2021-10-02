import React from "react";

import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Project from "../components/SingleProject/ProjectDetails";

import "../styles/main.scss";

export default function SingleProject() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Project />
      </div>
      <Footer />
    </div>
  );
}
