export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    projects,
  };
};

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
        // console.log(d);
        dispatch(setProjects(d));
      });
  };
};
