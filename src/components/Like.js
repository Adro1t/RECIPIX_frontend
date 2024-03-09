import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  deleteLikedRecipes,
  updateLikedRecipes,
  updatePreferences,
} from "./uiApi";

const Like = ({ props, userDetails }) => {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const likedRecipesId = userDetails
    ? userDetails.likedRecipes.map((recipe) => recipe._id)
    : "";

  function handleLikeChange() {
    if (backgroundColor === "black") {
      updateLikedRecipes(userDetails.email, props._id).then(() => {
        updatePreferences(userDetails.email, props.ingredientArray);
      });
      console.log(userDetails.preferences);
      setBackgroundColor("red");
    }

    if (backgroundColor === "red") {
      deleteLikedRecipes(userDetails.email, props._id);
      setBackgroundColor("black");
    }
  }

  useEffect(() => {
    // console.log(likedRecipesId);
    likedRecipesId.includes(props._id)
      ? setBackgroundColor("red")
      : setBackgroundColor("black");
    // console.log(props);
    // console.log(userDetails);
  }, [userDetails]);

  return (
    <>
      <Link to={userDetails ? `` : `/login`}>
        <div className="card-icon">
          <button className="border-0" onClick={handleLikeChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={backgroundColor}
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </button>
        </div>
      </Link>
    </>
  );
};

export default Like;
