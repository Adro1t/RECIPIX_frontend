import React, { useEffect, useState } from "react";
import { forgetPassword } from "../pages/auth";
import { Link } from "react-router-dom";
import "./ForgetPassword.css"

const ForgetPassword = () => {
  const [values, setValues] = useState({
    email: "",
    error: "",
    success: false,
  });

  const { email, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    forgetPassword({ email }).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({ ...values, email: "", success: true });
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

  //to show success message
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Reset Password Link has been sent to your email address
    </div>
  );

  useEffect(() => {
    if (success) {
      // Trigger re-render to show success message
      setValues({ ...values, success: true }); // Update state again to force re-render
    }
  }, [success]);

  return (
  
    <div className="Froget-Container d-flex justify-content-center w-100">
      <div className="p-5">
        <p className="h2">Reset your password</p>
        <p>Enter your email and we'll send you link to reset your password.</p>
        <form>
          {showError()}
          {showSuccess()}
          <input
            className="form-control "
            type="text"
            id="email"
            name="email"
            onChange={handleChange("email")}
            value={email}
            placeholder="Email address"
          />
          <br />
          <button className="btn submit-btn" onClick={clickSubmit}>
            Send link
          </button>
        </form>
        <br />
        <p>Go back to <Link className="text-decoration-underline" to="/login">Login page</Link></p>
      </div>
      </div>

  );
};

export default ForgetPassword;
