import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSignUpFrom, signup } from "../actions/signupForm";

const SignUpForm = ({ history, formdata, updateSignUpFrom, signup }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...formdata,
      [name]: value,
    };
    updateSignUpFrom(updatedForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signup(formdata, history);
  };
  return (
    <div className="valign-wrapper">
      <div
        className="row"
      >
        <div className="col s12 m12">
          <div className="card blue-grey darken-1"></div>
          
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleInput}
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={formdata.name}
              /><br />
              <input
                onChange={handleInput}
                type="text"
                name="email"
                id=""
                placeholder="Email"
                value={formdata.email}
              /><br />
              <input
                onChange={handleInput}
                type="password"
                name="password"
                id=""
                placeholder="Password"
                value={formdata.password}
              /><br />
              <input style={{ borderRadius: "22px", width: "100%" }}
              className="light-blue waves-effect waves btn"type="submit" />
            </form>
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ signupForm }) => {
  return {
    formdata: signupForm,
  };
};

export default connect(mapStateToProps, { updateSignUpFrom, signup })(
  SignUpForm
);
