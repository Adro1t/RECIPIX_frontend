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
      <nav className="navbar">
        <div className="nav-logo">
          <Link className="" to="/">
            <img className="img-logo" src={recipix} alt=""></img>
            RecipiX
          </Link>
        </div>
        <Search />
        <div className="nav-pages">
          <ul className="nav-links">
            <li className="links">
              <Link className="" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="links">
              <Link className="" to="/explore">
                Explore
              </Link>
            </li>
            <li className="links">
              <Link className="" aria-disabled="true">
                Help
              </Link>
            </li>
          </ul>
        </div>

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
        <div className="hamberger">
          {!isAuthenticated() && (
            <Link to="/login">
              <img src={hamberger} alt="login" />
            </Link>
          )}

          {isAuthenticated() && (
            <div className="d-flex">
              <Link to={dashboardLink}>
                <img src={hamberger} alt="login" />
              </Link>

              <div className="dropdown d-flex">
                <Link
                  to="#"
                  className="d-flex align-items-center text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></Link>
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
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
