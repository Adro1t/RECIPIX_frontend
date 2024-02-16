import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { API } from "../../config";

const Confirm = () => {
  const [values, setValues] = useState({
    error: "",
    success: false,
  });

  const { error, success } = values;
  const token = useParams();
  useEffect(() => {
    fetch(`${API}/user/confirmation/${token.token}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({ ...values, error: "", success: true });
        }
      })
      .catch((error) => console.log(error));
  }, [token.token, values]);

  //to show error message
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  //to show success message
  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
      Your account has been verified
    </div>
  );

  return (
    <>
      <Nav />
      {showError()}
      {showSuccess()}
    </>
  );
};

export default Confirm;
