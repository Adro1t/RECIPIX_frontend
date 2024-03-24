import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages/auth";
import "./user.css";
import home from "../images/house-solid.svg";
import like from "../images/heart-solid.svg";
import user from "../images/user-solid.svg";
import add from "../images/plus-solid.svg";

const UserSidebar = () => {
  const navigate = useNavigate();
  const {
    user: { name, email },
  } = isAuthenticated();
  return (
    <div className="container-fluid">
      <div
        className="d-flex flex-column flex-shrink-0 rounded-3"
        style={{ width: "280px" }}
      >
        {/* <Link
          to="/user/dashboard"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Dashboard</span>
        </Link> */}
        <ul className="nav nav-link flex-column dashboard">
          <li className="nav-item d-flex align-item-center justify-content-start gap-2">
            <img src={home} alt="" className="icon" />
            <Link
              to="/user/dashboard"
              className="nav-link active text-dark"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          <li className="d-flex align-item-center justify-content-start gap-2">
            <img src={add} alt="" className="icon" />
            <Link to="/user/addrecipe" className="nav-link text-white">
              Add Recipe
            </Link>
          </li>
          <li className="d-flex align-item-center justify-content-start gap-2">
            <img src={user} alt="" className="icon" />
            <Link to="/user/myrecipes" className="nav-link text-white">
              My Recipes
            </Link>
          </li>
          <li className="d-flex align-item-center justify-content-start gap-2">
            <img src={like} alt="" className="icon" />
            <Link to="/user/likedrecipes" className="nav-link text-white">
              Liked Recipes
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown text-dark">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            /> */}
            <strong className="text-dark ps-3">{name}</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-light text-small shadow text-dark">
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
