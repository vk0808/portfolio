import React, { useState } from "react";

import Navbar from "./components/Header/Navbar";
import Theme from "./components/ThemeSwitcher/Theme";
import Intro from "./components/Intro/Intro";
import "./styles/main.scss";

export default function App() {
  const [colorTheme, setColorTheme] = useState("theme-1");

  return (
    <div className={`App ${colorTheme}`}>
      <Navbar />
      <Theme colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <Intro />
    </div>
  );
}
