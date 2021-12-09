import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProjectsList from "./ProjectsList";
import { projectList } from "./works";

const Projects = () => {
  let website = projectList.filter((project) => project.category === "website");
  let app = projectList.filter((project) => project.category === "app");
  let game = projectList.filter((project) => project.category === "game");

  const [selected, setSelected] = useState("app");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "website",
      title: "Website"
    },
    {
      id: "app",
      title: "Web App"
    },
    {
      id: "game",
      title: "Game"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "website":
        setData(website);
        break;
      case "app":
        setData(app);
        break;
      case "game":
        setData(game);
        break;
      default:
        setData(website);
    }
  }, [selected]);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-title">
          <h1>Projects</h1>
        </div>
        <div className="content">
          <ul>
            {list.map((item) => (
              <ProjectsList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
          <div className="list">
            {data.map((project) => {
              const { id, name, image } = project;
              return (
                <div key={id} className="item">
                  <Link to={`/project/${id}`}>
                    <img src={image} alt={name} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
