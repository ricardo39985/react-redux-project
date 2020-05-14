import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectsContainer = ({ projects }) => {
    console.log(projects)
  return (
      
    <div>
     {projects.map((project, index)=><Project key={index} project={project}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
