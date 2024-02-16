import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages/auth";

const UserSidebar = () => {
  const navigate = useNavigate();
  const {
    user: { name, email },
  } = isAuthenticated();
  return (
    <div className="container-fluid">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <Link
          to="/user/dashboard"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Dashboard</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/user/dashboard"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          <li>
            <Link to="/user/addrecipe" className="nav-link text-white">
              Add Recipe
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              My Recipes
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              Customers
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{name}</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <Link className="dropdown-item" to="#">
                {email}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/login"
                onClick={() => signout(() => navigate("/login"))}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
