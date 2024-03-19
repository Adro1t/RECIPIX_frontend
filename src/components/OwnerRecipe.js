import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import Edit from "./Edit";
import "./OwnerRecipe.css";
import Trash from "./Trash";

const OwnerRecipe = ({ props, onShow }) => (
  <Link to={`/recipedetail/${props._id}`}>
    <div className="mt-3">
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
            <Edit/>
            <button className="border-0" onClick={() => onShow(props)}>
                  <Trash />
                </button>
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
