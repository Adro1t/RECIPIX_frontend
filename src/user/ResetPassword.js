import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../config";

const ResetPassword = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
    error: "",
    success: false,
  });
  const token = useParams();

  const { email, password, cpassword, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    //reset password
    fetch(`${API}/user/password/reset/${token.token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({ ...values, error: "", email: "", password: "", cpassword: "", success: true });
        }
      })
      .catch((err) => console.log(err));
  };

  //to show error message
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  //to show success message
  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
      Password has been reset successfully
    </div>
  );

  return (
    <>
      <div className="p-5  w-50">
        <h1>Forget Password</h1>
        <form>
          {showError()}
          {showSuccess()}

          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            onChange={handleChange("email")}
            value={email}
          />
          <br />

          <label htmlFor="email">New Password:</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleChange("password")}
            value={password}
          />
          <br />

          <label htmlFor="email">Confirm New Password:</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="cpassword"
            name="cpassword"
            onChange={handleChange("cpassword")}
            value={cpassword}
          />
          <br />

          <button className="btn btn-primary" onClick={clickSubmit}>
            Reset Password
          </button>
          <Link to="/login">Go to Login</Link>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
