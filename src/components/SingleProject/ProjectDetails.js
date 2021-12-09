import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../Projects/works";
import { skills } from "../About/skills";

const Project = () => {
  const { id } = useParams();
  const specificProject = projectList.filter(
    (project) => JSON.stringify(project.id) === id
  );

  const {
    name,
    mockup,
    category,
    technology,
    links,
    description
  } = specificProject[0];

  const iconBuilder = (tech) => {
    let icons = tech.split(", ");
    let images = [];
    icons.map((icon) =>
      images.push(
        skills.find((image) => image.text.toLowerCase() === icon.toLowerCase())
      )
    );
    return images;
  };

  return (
    <section className="single-project section">
      <div className="container">
        <div className="section-title">
          <h1>{name}</h1>
        </div>
        <div className="content">
          <div className="mockup">
            <img src={mockup} alt={`${name}-mockup`} width="100%" />
          </div>
          <div className="details">
            <h2>Project information</h2>
            <ul>
              <li className="category">
                <h3>Category: </h3>
                <p>{category}</p>
              </li>
              <li className="technology">
                <h3>Technology: </h3>
                <ul className="list">
                  {iconBuilder(technology).map((image) => {
                    const { id, url, text } = image;
                    return (
                      <li key={id}>
                        <img src={url} alt={text} />
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="description">
                <h3>Description: </h3>
                <p>{description}</p>
              </li>
              <li className="project-links">
                <h3>Links: </h3>
                <ul>
                  {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li key={id}>
                        <a
                          className="button"
                          href={url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
