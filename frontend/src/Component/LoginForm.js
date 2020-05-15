import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const LoginForm = ({ loginFormData, updateLoginForm, login, history}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const forminfo = { ...loginFormData, [name]: value };
    updateLoginForm(forminfo);
  };
  const handleSubmit =(event)=>{
    event.preventDefault()
    login(loginFormData,history)

  }
  return (
    <div className="valign-wrapper">
      <div
        className="row
      "
      >
        <div className="col s12 m12">
          <div className="card blue-grey darken-1"></div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={loginFormData.email}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="text"
              name="password"
              value={loginFormData.password}
            />
            <br />

            <input
              style={{ borderRadius: "22px", width: "100%" }}
              className="light-blue waves-effect waves btn"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
  };
};
export default connect(mapStateToProps, { updateLoginForm, login })(LoginForm);
