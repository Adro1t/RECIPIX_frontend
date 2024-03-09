import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./OwnerRecipe.css";

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
        <div className="d-flex justify-content-between">
          <h2 className="OwnerRecipe-heading">{props.recipe_name}</h2>
          <div className="update">
            <button><i class="bi bi-pencil-square border-none" id="edit"></i></button>
            <button><i class="bi bi-trash" id="delete"></i></button>
          </div>
        </div> 
          <br />
          <h6 className="description">Description</h6>
          <p className="details">{props.description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default OwnerRecipe;