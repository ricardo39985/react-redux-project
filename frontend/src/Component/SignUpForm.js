import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSignUpFrom, signup } from "../actions/signupForm";

const SignUpForm = ({ formdata, updateSignUpFrom , signup}) => {
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
    
    signup(formdata);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          id=""
          placeholder="Name"
          value={formdata.name}
        />
        <input
          onChange={handleInput}
          type="text"
          name="email"
          id=""
          placeholder="Email"
          value={formdata.email}
        />
        <input
          onChange={handleInput}
          type="text"
          name="password"
          id=""
          placeholder="Password"
          value={formdata.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = ({ signupForm }) => {
  return {
    formdata: signupForm,
  };
};

export default connect(mapStateToProps, { updateSignUpFrom , signup})(SignUpForm);
