import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import usersReducer from "../src/reducers/users";
import thunk from "redux-thunk";
import currentUser from "../src/reducers/currentUser";
import loginForm from '../src/reducers/loginForm '
import projects from '../src/reducers/projects'
import signupForm from '../src/reducers/signupForm'
import newProjectForm from '../src/reducers/projectForm'
//For Redux Chrome extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  projects,
  signupForm,
  newProjectForm
});
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
