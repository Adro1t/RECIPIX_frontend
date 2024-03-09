import { Link } from "react-router-dom";
import like from "../images/like.png";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../pages/auth";
import {
  deleteLikedRecipes,
  getUserDetails,
  updateLikedRecipes,
} from "./uiApi";

const Like = ({ props }) => {
  const { token, user } = isAuthenticated();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [userDetails, setUserDetails] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState("");

  function handleLikeChange() {
    backgroundColor === "transparent"
      ? setBackgroundColor("red")
      : setBackgroundColor("transparent");
    backgroundColor === "transparent" &&
      updateLikedRecipes(userDetails.email, props._id);

    backgroundColor === "red" && deleteLikedRecipes(user.email, props._id);
  }

  const init = async () => {
    try {
      const userResponse = await getUserDetails(token, user._id);
      setUserDetails(userResponse);
      setLikedRecipes(userResponse.likedRecipes);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Link to="#">
        <div className="card-icon">
          <button
            className="border-0"
            style={{ background: backgroundColor }}
            onClick={handleLikeChange}
          >
            <img src={like} alt="" />
          </button>
          {/* <button>
                      <img src={comment} alt="" />
                    </button> */}
        </div>
      </Link>
    </>
  );
};

export default Like;
