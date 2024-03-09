import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./OwnerRecipe.css";
import image from "../images/c2.jpg";

const OwnerRecipe = ({ props }) => (
  <Link to={`/recipedetail/${props._id}`}>
    <div className="card-container">
      <div className="card-background gap-3">
        <div className="image">
          <img
            className="recipe-image"
            src={`${API}/${props.image}`}
            alt={props.recipe_name}
          />
        </div>
        <div className="Details-container">
          <h1 className="OwnerRecipe-heading">{props.recipe_name}</h1>
          <br />
          <h6 className="description">Description</h6>
          <p className="details">{props.description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default OwnerRecipe;
