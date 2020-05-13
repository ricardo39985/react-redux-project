import React from "react";
import { connect } from "react-redux";

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
            </li> : <li>
              <a href="/logout">Logout</a>
            </li> }
            
            
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