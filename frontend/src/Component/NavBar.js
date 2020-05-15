import React from "react";
import { connect } from "react-redux";
import {logout  } from '../actions/currentUser';
import { withRouter } from "react-router";
const NavBar = ({currentUser, logout, history}) => {
  const handleLogout =()=>{
    logout(history)
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">
            Bug Tracker
          </a>
          <ul id="nav-mobile" className="">
          
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/projects/new">Add Project</a>
            </li>
            {!currentUser? <li>
              <a href="/login">Login</a>
            </li> : <li ><a onClick={(e)=>{
              logout()
              history.push("/")
              }} >Logout</a></li> }
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps =({currentUser})=>{
return{currentUser}
}
export default withRouter(connect(mapStateToProps, {logout})(NavBar))