import React from "react";
import { connect } from "react-redux";
import {deleteProjectDB} from '../actions/projects'
const ProjectCard = ({ project, deleteProjectDB }) => {
  const bstyle = { borderRadius: "18px", margin: "5px" };
  return (
    <div style ={{width: "400px;", margin: "10px",height: "200px"}}className="left">
      <div class="center">
        <div class="col s10 m2">
          <div class="card white darken-2">
            <div class="">
              <span class="card-title ">{project.name}</span>
              <p className="flow">
               Project is currently in: {project.state}
              </p>
            </div>
            <div class="">
              <a href="href= {`/projects/${project.id}`}">
                <button
                  className="waves-effect waves-light blue  btn"
                  style={bstyle}
                >
                  View
                </button>
              </a>
              <a  >
                <button onClick={()=>{deleteProjectDB(project.id)}}
                  className="waves-effect waves-light  deep-orange accent-4 btn"
                  style={bstyle}
                >
                  Delete
                </button>
              </a>
              {/* <a href="href= {`/projects/${project.id}`}">
                <button
                  className="waves-effect waves-light  deep-orange accent-4 btn"
                  style={bstyle}
                >
                  {project.state}
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {deleteProjectDB})(ProjectCard)