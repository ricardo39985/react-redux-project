import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectsContainer = ({ projects, loggedIn }) => {
  const allProjects = loggedIn && projects.length > 0 ? projects.map((project, index) => (
    <Project key={index} project={project} />
  )) : null
  return <div>{allProjects}</div>;
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects || [],
    loggedIn: !!state.currentUser
  };
};

export default connect(mapStateToProps)(ProjectsContainer);
