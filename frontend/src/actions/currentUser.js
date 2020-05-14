import {resetLoginForm} from '../actions/loginForm'
import { getProjects} from './projects';

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};
export const clearCurrentUser =() =>{
  return {type: "CLEAR_CURRENT_USER"}

}
export const logout =() =>{
  return dispatch =>{
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/logout", {
      credentials: "include",
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    }
  })
  }
}
export const login = (credentials) => {
  console.log(credentials);
  return (dispatch) => {
    return fetch("http://localhost:3000/login", {
        credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ credentials }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.error) {
          console.log("ERROR");
        } else {
          
          dispatch(setCurrentUser(d));
          
          dispatch(resetLoginForm())
        }
      });
  };
};
export const getUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/get_user", {
        credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.notice) {
          console.log("ERROR");
        } else {
          // console.log(d);
          dispatch(setCurrentUser(d));
          dispatch(getProjects())
        }
      });
  };
};
