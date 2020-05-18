import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";
import { withRouter } from "react-router";
const NavBar = ({ currentUser, logout, history }) => {
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <a href="/" className="brand-logo right">
            <h5>Bug Tracker</h5>
          </a>
          <ul id="nav-mobile" className="">
            {!currentUser ? (
              <div>
                <li>
                  <a href="/login"> Login </a>
                </li>
                <li>
                  <a href="/signup"> Signup </a>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <a
                    onClick={(e) => {
                      logout(history);
                    }}
                  >
                    Logout
                  </a>
                </li>

                <li>
                  <a href="/projects"> Projects </a>
                </li>
                <li>
                  <a href="/projects/new"> Add Project </a>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return { currentUser };
};
export default withRouter(connect(mapStateToProps, { logout })(NavBar));
