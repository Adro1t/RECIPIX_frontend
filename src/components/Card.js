import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { API } from "../config";
import Like from "./Like";
import { getUserDetails } from "./uiApi";
import { isAuthenticated } from "../pages/auth";

const Card = ({ props }) => {
  const [userDetails, setUserDetails] = useState();
  const { token, user } = isAuthenticated();

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const init = async () => {
    try {
      const data = await getUserDetails(token, user._id);
      setUserDetails(data);
      // console.log(data);
      // console.log(userDetails);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (!props || !userDetails) return null; // Early return if data is missing

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
                {/* <div className="rating">
                    <img src={rating} alt="" />
                    <h3>{props.rating}</h3>
                  </div> */}
              </div>
              <div className="time">
                <h3 className="total-time">{props.total_time} min</h3>
                <Like props={props} userDetails={userDetails} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
