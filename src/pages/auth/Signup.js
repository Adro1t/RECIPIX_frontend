import React, { useState } from "react";
import "./Login.css";

import { signup } from "./index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });

  const { name, email, password, confirmPassword, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    if (password === confirmPassword) {
      //Signup function
      signup({ name, email, password }).then((data) => {
        if (data && data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            success: true,
          });
        }
      });
    } else {
      setValues({
        ...values,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "Password and confirm password doesn't match",
      });
    }
  };

  //to show error message
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  //to show success message
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New Account Created, verify your account before login
    </div>
  );

  return (
    <>
      <form>
        {showError()}
        {showSuccess()}
        <label className="form-text" htmlFor="userName">
          Username:
        </label>
        <br />
        <input
          className="form-control input-field form-text1"
          type="text"
          id="userName"
          name="userName"
          onChange={handleChange("name")}
          value={name}
          placeholder="Enter your username"
        />
        <br />
        <label className="form-text" htmlFor="email">
          Email:
        </label>
        <br />
        <input
          className="form-control input-field form-text1 "
          type="text"
          id="email"
          name="email"
          onChange={handleChange("email")}
          value={email}
          placeholder="Enter your e-mail"
        />
        <br />
        <label className="form-text" htmlFor="password">
          Password:
        </label>
        <br />
        <input
          className="form-control input-field form-text1"
          type="password"
          id="password"
          name="password"
          onChange={handleChange("password")}
          value={password}
          placeholder="Enter your password"
        />
        <br />
        <label className="form-text" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <br />
        <input
          className="form-control input-field form-text1"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange("confirmPassword")}
          value={confirmPassword}
          placeholder="Re-enter your password"
        />
        <br />
        <button
          className="btn btn-primary input-btn form-text"
          onClick={clickSubmit}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Signup;
