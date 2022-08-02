import React from "react";

function Project(props) {
  const { project } = props;

  return (
    <div className="project" id={project.identifier}>
      <div className="banner">
        <h3 className="project-title">{project.name}</h3>
        <h6 className="project-info">{project.tools}</h6>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-lg icon p-2"></i>
          </a>
        )}
        {project.deploy && (
          <a href={project.deploy} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square fa-lg icon p-2"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
