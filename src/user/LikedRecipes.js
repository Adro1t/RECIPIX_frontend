import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import { isAuthenticated } from "../pages/auth";
import { getUserDetails } from "../components/uiApi";
import Card from "../components/Card";

const LikedRecipes = () => {
  const { token, user } = isAuthenticated();
  const [recipes, setRecipes] = useState([]);

  const init = () => {
    getUserDetails(token, user._id)
      .then((data) => {
        setRecipes(data.likedRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => init(), []);

  return (
    <>
      <div className="container">
        <div className="row gap-5">
        <div className="col-md-3 pt-2">
          <UserSidebar />
        </div>
        <div className="col-md-8 pt-5">
          <h1>Liked Recipes</h1>
          <div className="d-flex flex-wrap gap-2">
            {recipes.map((recipe) => (
              <Card props={recipe} key={recipe._id} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default LikedRecipes;
