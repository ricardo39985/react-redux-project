import { getProjects } from "./projects";

export const updateNewProjectForm = (formdata) => {
  return {
    type: "UPDATE_NEW_PROJECT_FORM",
    formdata,
  };
};
export const resetProjectForm = () => {
  return {
    type: "RESET_NEW_PROJECT_FORM",
  };
};

export const submitNewProject = (projectInfo, history) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/projects", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ projectInfo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
        } else {
          dispatch(getProjects());
          dispatch(resetProjectForm());
          history.push("/projects")
        }
      });
  };
};
