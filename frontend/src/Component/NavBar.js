import React from "react";
import { connect } from "react-redux";
import Logout from "./Logout";

const NavBar = ({currentUser}) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">
            Bug Tracker
          </a>
          <ul id="nav-mobile" className="">
          
            <li>
              <a href="sass.html">Sass</a>
            </li>
            {!currentUser? <li>
              <a href="/login">Login</a>
            </li> : <Logout/> }
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps =({currentUser})=>{
return{currentUser}
}
export default connect(mapStateToProps)(NavBar)