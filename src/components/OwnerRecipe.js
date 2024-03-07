import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./OwnerRecipe.css";
import image from "../images/c2.jpg";

const OwnerRecipe = () => (
  <div className="card-container">
    <div className="card-background gap-3">
      <div className="image">
        <img className="recipe-image" src={image} alt="image" />
      </div>
      <div className="Details-container">
        <h1 className="OwnerRecipe-heading">momo</h1>
        <br />
        <h6 className="description">Description</h6>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos
          non facere tempore? Similique, obcaecati facere labore voluptas
          eveniet minus consectetur quo nulla esse hic impedit accusantium
          optio, consequuntur distinctio.
        </p>
      </div>
    </div>
  </div>
);

export default OwnerRecipe;
