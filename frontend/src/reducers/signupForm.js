const initState = {
  name: "",
  email: "",
  password: "",
};
export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formdata;
      case "RESET_SIGNUP_FORM":
      return initState;
    default:
      return state;
  }
};
