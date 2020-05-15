import React from "react";

export default ({ project }) => {
  return (
    <a href= {`/projects/${project.id}`}>
      <div id={project.id}>
        <p>{project.name}</p>
      </div>
    </a>
  );
};
