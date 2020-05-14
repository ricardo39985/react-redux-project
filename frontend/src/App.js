import React, { Component } from "react";
import "./App.css";
import LoginForm from "./Component/LoginForm";
import NavBar from "./Component/NavBar";
import { getUser } from "./actions/currentUser";
import { connect } from "react-redux";
import Logout from "./Component/Logout";
import MainContainer from "./Component/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  SignUpForm  from "./Component/SignUpForm";
import NewProjectForm from "./Component/NewProjectForm";
import ProjectsContainer from "./Component/ProjectsContainer";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <Router>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" component={MainContainer} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/projects/new" component={NewProjectForm} />
            <Route exact path="/projects" component={ProjectsContainer} />

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
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { getUser })(App);
