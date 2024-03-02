import search from "../images/Search-icon.png";
import React, { useEffect, useState } from "react";
import { getRecipe } from "./uiApi";

const Search = () => {
  const [recipe, setRecipe] = useState([]);

  const loadRecipe = () => {
    getRecipe("recipe_name", "asc", undefined)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setRecipe(data);
          console.log(data);
          console.log(recipe);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // while (recipe.length <= 0) {
  //   loadRecipe();
  // }

  if (recipe) {
    return (
      <div className="search-bar">
        <form className="example">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit" onClick={loadRecipe}>
            <img className="Search-icon" src={search} alt=""></img>
          </button>
        </form>
      </div>
    );
  }
};

export default Search;
