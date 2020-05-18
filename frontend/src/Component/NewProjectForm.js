import React from "react";
import { connect } from "react-redux";
import { updateNewProjectForm, submitNewProject } from "../actions/projectForm";

const NewProjectForm = ({ history, newProjectForm, updateNewProjectForm, submitNewProject}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updateForm = {
      ...newProjectForm,
      [name]: value,
    };
    updateNewProjectForm(updateForm);
  };
  const handleSubmit = (e)=>{
e.preventDefault()
submitNewProject(newProjectForm, history)
  }
  return (
    <div style={{width: "400px"}}className="row center">
      <h3>New Project</h3>
      <div>

      <form onSubmit={handleSubmit}>
        <label className="black-text left"for="name">Project Name</label>
        <input id="name"
        style={{borderRadius: "20px", border: "solid 1px #2196F3",width: "200px,"}}
          type="text"
          value={newProjectForm.name}
          name="name"
          onChange={handleInputChange}
        />
        <label className="black-text left"for="state">Project State</label>
        <input id ="state"
        style={{borderRadius: "20px", border: "solid 1px #2196F3",width: "200px,"}}
          name="state"
          type="text"
          value={newProjectForm.state}
          onChange={handleInputChange}
        />
        <input style={{borderRadius: "22px" , width: "100%"}}className="btn blue"type="submit" />
      </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ newProjectForm }) => {
  console.log(newProjectForm);

  return {
    newProjectForm,
  };
};
export default connect(mapStateToProps, { updateNewProjectForm, submitNewProject })(
  NewProjectForm
);
