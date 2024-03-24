import React from "react";
import image from "../images/svg.png";
const AboutComponent = () => {
  return (
    <>
      <div className="container pt-5 w-75">
      <div className="d-flex justify-content-around align-items-center gap-5">
        <div className="w-auto">
          <h3 className="fw-bold">About Us</h3>
          <br />
        <p>
          Welcome to RecipiX! We're your go-to platform for culinary inspiration
          and recipe sharing. Our web-based app offers a seamless experience for
          finding, sharing, and enjoying delicious recipes. With intuitive
          features and personalized recommendations, cooking has never been
          easier. Join our community today and explore a world of culinary
          delights with RecipiX!
        </p>
          </div>
        <img className="col w-50 d-none d-sm-block" src={image} alt="image" />
      </div>
      </div>
    </>
  );
};

export default AboutComponent;