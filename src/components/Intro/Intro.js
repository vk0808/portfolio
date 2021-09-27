import React from "react";
import { social } from "./social-links";

const Intro = () => {
  return (
    <div className="intro" id="intro">
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
            <img src="assets/img/down.png" alt="" />
          </a>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Intro;
