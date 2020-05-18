export default (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return action.projects;
    case "CLEAR_PROJECTS":
      return [];
      case "DELETE_PROJECT":
        console.log(action)
        return  state.filter(function( project ) {
           return project.id !== action.projectId;
        });
    default:

      return state;
  }
};
