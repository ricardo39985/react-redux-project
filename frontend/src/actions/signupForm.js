import { setCurrentUser } from "./currentUser";
import { getProjects } from "./projects";

export const updateSignUpFrom = (formdata) => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formdata
  };
};
export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM",
  };
};

export const signup = (credentials, history) => {
    return (dispatch) => {
      return fetch("http://localhost:3000/signup", {
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
            
            dispatch(getProjects());
            dispatch(setCurrentUser(d))
            dispatch(resetSignupForm())
            history.push("/")
          }
        });
    };
  };