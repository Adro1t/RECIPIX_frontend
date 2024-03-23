import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import khajaSet from "../images/Khajaset.png";
import logo from "../images/Recipix.png";
import "./auth/Login.css";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import { isAuthenticated } from "./auth";

const Login = () => {
  const [text, setText] = useState("WELCOME");
  const toggleSignIN = () => {
    document.getElementById("signin").classList.remove("d-none");
    document.getElementById("signup").classList.add("d-none");
    document.querySelector(".toggler").classList.add("underline");
    document.querySelector(".toggler2").classList.remove("underline");
    setText("WELCOME");
  };

  const toggleSignUP = () => {
    document.getElementById("signin").classList.add("d-none");
    document.querySelector(".toggler2").classList.add("underline");
    document.querySelector(".toggler").classList.remove("underline");
    document.getElementById("signup").classList.remove("d-none");
    setText("CREATE ACCOUNT");
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
      <div className="container-xl bg_image m-auto ">
        <div className="row d-flex align-item-center ">
          <div className="col-md-5 p-5 logins ">
            <Link to="/" className="d-flex justify-content-center logo-box">
              <img src={logo} alt="logo" className="logo1" width={"100px"} />
              <span className="title form-text">RecipiX</span>
            </Link>
            <p className=" text-center form-text">{text}</p>
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
          <div className="col-md-7 m-auto khaja ">
            <img src={khajaSet} alt="khaja" className="khajabg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
