const initState = {
    name: "",
    state: ""
  };
  export default (state = initState, action) => {
    switch (action.type) {
      case "UPDATE_NEW_PROJECT_FORM":
        return action.formdata;
        case "RESET_NEW_PROJECT_FORM":
        return initState;
      default:
        return state;
    }
  };