import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { API } from "../config";
import Like from "./Like";
import { getCategories } from "./uiApi";

const Card = ({ props }) => {
  const [categories, setCategories] = useState([]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  useEffect(() => {
    getCategories().then((category) => {
      setCategories(category);
    });
  }, []);

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
                  {props.category.category_Name
                    ? capitalize(props.category.category_Name)
                    : categories.filter(
                        (category) => category._id === props.category
                      )?.[0]?.category_Name}
                </h4>
                <div className="card-title">
                  <h3 className="Title">{props.recipe_name}</h3>
                  {/* <div className="rating">
                    <img src={rating} alt="" />
                    <h3>{props.rating}</h3>
                  </div> */}
                </div>
                <div className="time">
                  <h3 className="total-time">{props.total_time} min</h3>
                  <Like props={props} />
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
