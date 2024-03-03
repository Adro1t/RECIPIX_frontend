import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import rating from "../images/rating.png";
import like from "../images/like.png";
import comment from "../images/comment.png";
import { API } from "../config";

const Card = ({ props }) => {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  if (props !== undefined) {
    return (
      <>
        <Link to={`/recipedetail/${props._id}`}>
          <div className="card-container">
            <div className="card">
              <img
                src={`${API}/${props.image}`}
                alt={props.recipe_name}
                className="card-img"
              />
              <div className="card-content">
                <h4 className="category">
                  {capitalize(props.category.category_Name)}
                </h4>
                <div className="card-title">
                  <h3 className="Title">{props.recipe_name}</h3>
                  <div className="rating">
                    <img src={rating} alt="" />
                    <h3>{props.rating}</h3>
                  </div>
                </div>
                <div className="time">
                  <h3 className="total-time">{props.total_time} min</h3>
                  <div className="card-icon">
                    <button className="border-0">
                      <img src={like} alt="" />
                    </button>
                    <button className="border-0">
                      <img src={comment} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
};

export default Card;
