import React from "react";
import { connect } from "react-redux";
import { updateNewProjectForm } from "../actions/projectForm";

const NewProjectForm = ({ newProjectForm, updateNewProjectForm }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updateForm = {
      ...newProjectForm,
      [name]: value,
    };
    updateNewProjectForm(updateForm);
  };
  return (
    <div>
      <h1>New project form</h1>
      <form action="">
        <input
          type="text"
          value={newProjectForm.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          name="state"
          type="text"
          value={newProjectForm.state}
          onChange={handleInputChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
const mapStateToProps = ({ newProjectForm }) => {
  console.log(newProjectForm);

  return {
    newProjectForm,
  };
};
export default connect(mapStateToProps, { updateNewProjectForm })(
  NewProjectForm
);
