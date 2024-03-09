import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import OwnerRecipe from "../components/OwnerRecipe";
import { isAuthenticated } from "../pages/auth";
import { getRecipe } from "../components/uiApi";

const MyRecipes = () => {
  const { user } = isAuthenticated();
  const [recipes, setRecipes] = useState([]);

  const init = () => {
    getRecipe("createdAt", "asc")
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          const userRecipes = data.filter(
            (recipe) => recipe.owner._id === user._id
          );
          setRecipes(userRecipes);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => init(), []);

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <UserSidebar />
        </div>
        <div className="col-md-9 mt-4">
          <h1>My Recipes</h1>
          {recipes.map((recipe) => (
            <OwnerRecipe props={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRecipes;
