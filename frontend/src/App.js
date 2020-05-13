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
          {!this.props.currentUser ? <LoginForm /> : <Logout/>  }
          
         
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps, {getUser})(App);
