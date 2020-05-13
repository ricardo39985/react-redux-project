const initState = {
  email: "",
  password: "",
};
export default (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formdata;
      case "RESET_LOGIN_FORM":
        return initState;
    default:
      return state;
  }
};
