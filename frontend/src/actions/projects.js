export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    projects,
  };
};
export const clearProjects = () => {
  return {
    type: "CLEAR_PROJECTS",
  };
};

export const deleteProject = (projectId) => {
  return { type: "DELETE_PROJECT", projectId };
};
export const deleteProjectDB = (id)=>{
  return (dispatch) => {
    return fetch(`http://localhost:3000/projects/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        dispatch(deleteProject(id))
        // dispatch(getProjects());
      });
  };
}
export const getProjects = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/projects", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        dispatch(setProjects(d));
      });
  };
};
