import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { authenticate, isAuthenticated, signin } from "./index";

const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const { email, password, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
          redirectUser();
        });
      }
    });
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

  //to redirect User
  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
    if (!isAuthenticated()) {
      navigate("/");
    }
  };

  return (
    <>
      <form className="input-grp">
        {showError()}
        {/* {redirectUser()} */}
        <label className="form-text" htmlFor="email">
          Email:
        </label>
        <br />
        <input
          className="input-field form-control form-text1"
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
          className="input-field form-control  form-text1"
          type="password"
          id="password"
          name="password"
          onChange={handleChange("password")}
          value={password}
          placeholder="Enter your password"
        />
        <br />
        <button
          className="btn btn-primary input-btn form-text"
          onClick={clickSubmit}
        >
          Login
        </button>
        <div style={{ textAlign: "center" }}>
          <Link className="form-text" to="/forgetpassword">
            Forgot Password
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signin;
