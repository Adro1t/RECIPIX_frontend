import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import khajaSet from "../images/Khajaset.png";
import logo from "../images/Recipix.png";
import background from "../images/background.png";
import "./auth/Login.css";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import { isAuthenticated } from "./auth";

const Login = () => {
  const toggleSignIN = () => {
    document.getElementById("signin").classList.remove("d-none");
    document.getElementById("signup").classList.add("d-none");
    document.querySelector(".toggler").classList.add("underline");
    document.querySelector(".toggler2").classList.remove("underline");
  };

  const toggleSignUP = () => {
    document.getElementById("signin").classList.add("d-none");
    document.querySelector(".toggler2").classList.add("underline");
    document.querySelector(".toggler").classList.remove("underline");
    document.getElementById("signup").classList.remove("d-none");
  };

  const navigate = useNavigate();
  const { user } = isAuthenticated();

  //to redirect User
  const redirectUser = () => {
    if (user && user.role === 1) {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }

    if (!isAuthenticated()) {
      navigate("/login");
    }
  };

  useEffect(() => {
    redirectUser();
  }, [user]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-5">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="d-inline logo1"
                width={"100px"}
              />
              <span className="d-inline title form-text">RECIPIX</span>
            </Link>
            <p className=" text-center form-text">CREATE ACCOUNT</p>
            <div className="options-box">
              <div id="toggle-box"></div>
              <Link
                className="toggler underline form-text"
                to=""
                onClick={toggleSignIN}
              >
                Signin
              </Link>
              <Link
                className="toggler toggler2 form-text"
                to=""
                onClick={toggleSignUP}
              >
                Register
              </Link>
            </div>
            <div className="" id="signin">
              <Signin />
            </div>
            <div className="d-none" id="signup">
              <Signup />
            </div>
          </div>
          <div className="col-md-8">
            <img src={khajaSet} alt="khaja" className="khajaset" />
            <img src={background} alt="..." className="khajabg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
