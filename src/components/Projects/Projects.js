import { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import { website, app, game } from "./works";

const Projects = () => {
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
          <h1>Portfolio</h1>
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
              const {
                id,
                name,
                image,
                technology,
                description,
                links
              } = project;
              return (
                <div key={id} className="item">
                  <img src={image} alt={name} />
                  {/* <p>{technology}</p>
                <p>{description}</p>
                {links.map((link) => {
                  const { demo, github, codeSandbox } = link;
                  return (
                    <ul>
                      <li>
                        <a href={demo} target="_blank">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href={github} target="_blank">
                          Github
                        </a>
                      </li>
                      <li>
                        <a href={codeSandbox} target="_blank">
                          CodeSandbox
                        </a>
                      </li>
                    </ul>
                  );
                })} */}
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
