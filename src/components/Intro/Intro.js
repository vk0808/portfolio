import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import Theme from "../ThemeSwitcher/Theme";
import { social } from "./social-links";

const Intro = () => {
  const [colorTheme, setColorTheme] = useState("theme-1");

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <section className="intro" id="intro">
      <div className="theme-switcher">
        <Theme colorTheme={colorTheme} setColorTheme={setColorTheme} />
      </div>
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>
            Vinod <span className="last-name">Kumar R</span>
          </h1>
          <p className="role">Full Stack Developer</p>
          <p className="location">from Bangalore</p>
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
        <div className="arrow scroll-btn">
          <NavHashLink
            smooth
            activeClassName="active"
            to="#projects"
            scroll={(el) => scrollWithOffset(el)}
          >
            <span className="mouse">
              <span></span>
            </span>
          </NavHashLink>
        </div>
      </div>
    </section>
  );
};

export default Intro;
