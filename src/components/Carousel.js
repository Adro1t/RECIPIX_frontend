import React from "react";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";
import c5 from "../images/c5.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide my-5"
        data-bs-ride="carousel"
        style={{ zIndex: "1" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c5} className="d-block w-100" alt="1" />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="2" />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="3" />
          </div>
          <div className="carousel-item">
            <img src={c4} className="d-block w-100" alt="4" />
          </div>
          <div className="carousel-item">
            <img src={c1} className="d-block w-100" alt="5" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
