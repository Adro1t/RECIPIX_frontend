import React, { useEffect, useState } from "react";
import { forgetPassword } from "../pages/auth";

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

          <br />
          <button className="btn btn-primary" onClick={clickSubmit}>
            Send Password Reset Link
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
