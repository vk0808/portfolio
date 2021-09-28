import React, { useState } from "react";

import Theme from "../ThemeSwitcher/Theme";
import { social } from "./social-links";
import { ReactComponent as Down } from "./down-arrow.svg";

const Intro = () => {
  const [colorTheme, setColorTheme] = useState("theme-1");
  return (
    <div className="intro" id="intro">
      <div className="theme-switcher">
        <Theme colorTheme={colorTheme} setColorTheme={setColorTheme} />
      </div>
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>
            Vinod <span className="last-name">Kumar R</span>
          </h1>
          <p className="role">
            I'm a <span>Full Stack Web </span>
            Developer
          </p>
          <p className="location">
            from <span>Bangalore</span>
          </p>
          <div className="social-links">
            <ul>
              {social.map((item) => {
                const { id, name, url, icon } = item;
                return (
                  <li className="icons" key={id}>
                    <a area-label={name} href={url}>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a href="assets/Vinod's Resume.pdf" target="_blank" download>
            <button>Download Resume</button>
          </a>
        </div>
        <div className="arrow">
          <a className="down-arrow" href="#portfolio">
            <Down />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
