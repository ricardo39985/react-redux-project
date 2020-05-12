export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

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
          console.log(d);
          dispatch(setCurrentUser(d));
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
          console.log(d);
          dispatch(setCurrentUser(d));
        }
      });
  };
};
