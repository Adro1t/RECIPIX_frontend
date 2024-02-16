import React, { useState } from "react";
import { isAuthenticated } from "../pages/auth";
import AdminSidebar from "./AdminSidebar";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [category_Name, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructure user and token from localStorage
  const { token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setCategory(e.target.value.toLowerCase());
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    //make request to create category
    createCategory(token, { category_Name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
        setCategory("");
      }
    });
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
      New Category added successfully
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-6 mt-5">
            <h2 className="text-center">Add Category</h2>

            <form className="shadow-lg p-3 rounded-4">
              {showError()}
              {showSuccess()}

              <div className="mb-3">
                <label htmlFor="category">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  onChange={handleChange}
                  value={category_Name}
                  required
                />
              </div>
              <div className="mb-3 text-center">
                <button className="btn btn-warning" onClick={clickSubmit}>
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
