import React from "react";
import { skills } from "./skills";

const About = () => {
  return (
    <section id="about" className="about section">
      <div class="container">
        <div class="section-title">
          <h1>About</h1>
        </div>

        <div class="content">
          <div>
            <p class="font-italic">
              Hey, my name's Vinod Kumar R. I live in Bangalore and I'm a full
              stack web developer, building web applications and sites using
              React and .Net frameworks. My first bit of exposure to web
              development was in summer holidays after high school when I had
              joined a Computer Diplomma Course, I learned basics of HTML. I
              like to think that I've learned a lot since then!. Check out some
              of my work and feel free to shoot me an email if you'd like to
              work together.
            </p>
          </div>
          <div>
            <h2>Skills</h2>
            <div className="skills">
              <ul className="list">
                {skills.map((skill) => {
                  const { id, url, text } = skill;
                  return (
                    <li key={id}>
                      <img src={url} alt={text} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
