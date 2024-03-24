import React from "react";
import { Link } from "react-router-dom";
import recipix from "../images/Recipix.png";
const AboutComponent = () => {
  return (
    <>
      <div className="container">
        <h3 className="pt-5 fw-bold">About Us</h3>
        <p className="text-justify" >
          Welcome to RecipiX! We're your go-to platform for culinary inspiration
          and recipe sharing. Our web-based app offers a seamless experience for
          finding, sharing, and enjoying delicious recipes. With intuitive
          features and personalized recommendations, cooking has never been
          easier. Join our community today and explore a world of culinary
          delights with RecipiX!
        </p>
      </div>
    </>
  );
};

export default AboutComponent;