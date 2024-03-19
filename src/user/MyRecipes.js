import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import OwnerRecipe from "../components/OwnerRecipe";
import { isAuthenticated } from "../pages/auth";
import { getRecipe } from "../components/uiApi";
import Dialog from "../components/Dialog";

const MyRecipes = () => {
  const { user } = isAuthenticated();
  const [recipes, setRecipes] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  function handleDialog(recipe) {
    setSelectedRecipe(recipe);
    setShowDialog(!showDialog);
  }

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

  useEffect(() => init(), [showDialog]);

  return (
    <>
    <div className="container">
      <div className="row gap-5">
        <div className="col-md-3 pt-2">
          <UserSidebar />
        </div>
        <div className="col-md-8 pt-5">
          <h1>My Recipes</h1>
          {recipes.map((recipe) => (
            <OwnerRecipe
              props={recipe}
              onShow={handleDialog}
              key={recipe._id}
            />
          ))}
        </div>
        {showDialog && <Dialog props={selectedRecipe} onHide={handleDialog} />}
        {showDialog && (
          <div
            className=""
            style={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(0 0 0/.5)",
            }}
          ></div>
        )}
      </div>
      </div>
    </>
  );
};

export default MyRecipes;
