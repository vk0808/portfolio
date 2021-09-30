import React from "react";

const ProjectsList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
export default ProjectsList;
