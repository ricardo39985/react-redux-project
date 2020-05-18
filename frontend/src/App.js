import React, { Component } from "react";
import "./App.css";
import LoginForm from "./Component/LoginForm";
import NavBar from "./Component/NavBar";
import { getUser } from "./actions/currentUser";
import { connect } from "react-redux";
import Logout from "./Component/Logout";
import MainContainer from "./Component/MainContainer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignUpForm from "./Component/SignUpForm";
import NewProjectForm from "./Component/NewProjectForm";
import ProjectsContainer from "./Component/ProjectsContainer";
import Project from "./Component/Project";
import { getProjects } from "./actions/projects";
import { ProjectPage } from "./Component/ProjectPage";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  componentWillMount(){
    this.props.getProjects()

  }
  render() {
    const {projects}= this.props
    return (
      <div>
        <div className="App">
          <Router>
            <NavBar />
            <Route
              exact
              path="/"
              render={({ history }) =>
                this.props.loggedin ? (
                  <Redirect to="/projects" />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" component={MainContainer} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/projects/new" component={NewProjectForm} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route
              exact
              path="/projects/:project_id"
              render={ (props) => {
                const project = projects.find(({id})=>id.toString()===props.match.params.project_id
                  
                  
                )
                  console.log(project);
                  
                return <ProjectPage project={project}{...props} />;
              }}
            />

            {/* {!this.props.currentUser ? <LoginForm /> : <Logout/>  } */}
            {/* <MainContainer/>  */}
          </Router>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedin: !!state.currentUser,
    projects: state.projects

  };
};
export default connect(mapStateToProps, { getUser, getProjects})(App);
