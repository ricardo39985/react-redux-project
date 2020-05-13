import React, { Component } from "react";
import "./App.css";
import LoginForm from "./Component/LoginForm";
import { NavBar } from "./Component/NavBar";
import { getUser } from "./actions/currentUser";
import { connect } from "react-redux";
import Logout  from "./Component/Logout";

class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
          <LoginForm /> 
         <Logout/>
        </div>
      </div>
    );
  }
}

export default connect(null, {getUser})(App);
