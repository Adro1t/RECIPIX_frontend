import React from "react";
import { Link, useNavigate } from "react-router-dom";
import recipix from "../images/Recipix.png";
import person from "../images/user-icon.png";
import hamberger from "../images/hamburger-menu.svg"
import { isAuthenticated, signout } from "../pages/auth";
import "./Nav.css";
import Search from "./Search";

const Nav = () => {
  const navigate = useNavigate();
  const { user } = isAuthenticated();
  let dashboardLink = "";
  if (user) {
    dashboardLink = user.role === 1 ? "/admin/dashboard" : "/user/dashboard";
  }
  return (
    <>
     <nav className="navbar navbar-expand-lg mt-3">
      <div className="container-fluid nav-cont">
        <div className="nav-logo">
          <Link className="navbar-brand" to="/">
            <img className="img-logo" src={recipix} alt=""></img>
            RecipiX
          </Link>
        </div>
        <Search />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="nav-pages collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav-links navbar-nav mb-2 mb-lg-0">
            <li className="links nav-item">
              <Link className="" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="links nav-item">
              <Link className="" to="/explore">
                Explore
              </Link>
            </li>
            <li className="links nav-item">
              <Link className="" aria-disabled="true">
                Help
              </Link>
            </li>
          </ul>
        <div className="User">
          {!isAuthenticated() && (
            <Link to="/login">
              <img src={person} alt="login" />
            </Link>
          )}

          {isAuthenticated() && (
            <div className="dropdown d-flex">
              <Link
                to="#"
                className="d-flex align-items-center text-decoration-none "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={person} alt="login" />
              </Link>
              <ul className="dropdown-menu text-small shadow box">
                <li>
                  <Link className="dropdown-item" to="#">
                    {user.email}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={dashboardLink}>
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
          )}
        </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Nav;
