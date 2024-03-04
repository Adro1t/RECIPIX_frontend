import search from "../images/Search-icon.png";
import React, { useState, useEffect } from "react";
import { getRecipe } from "./uiApi";
import { Link } from "react-router-dom";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const loadRecipes = async () => {
    try {
      const data = await getRecipe("recipe_name", "asc");
      setRecipes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, [searchResults]);

  const fuzzySearch = (query) => {
    const queryLower = query.toLowerCase();
    const filteredResults = [];
    if (queryLower.length > 2) {
      for (const recipe of recipes) {
        const recipeLower = recipe.recipe_name.toLowerCase();
        let matchCount = 0;

        for (let i = 0; i < queryLower.length; i++) {
          if (recipeLower.includes(queryLower[i])) {
            matchCount++;
          }
        }

        if (matchCount >= queryLower.length) {
          filteredResults.push(recipe);
        }
      }
    }

    setSearchResults(filteredResults);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    fuzzySearch(searchTerm, recipes);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(searchResults);
  };

  return (
    <div className="search-bar" style={{ position: "relative" }}>
      <form className="example d-flex" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSearch}>
          <img className="Search-icon" src={search} alt="" />
        </button>
      </form>
      <div
        style={{ zIndex: "50", position: "absolute" }}
        className="bg-white w-100"
      >
        {searchResults.length > 0 &&
          searchResults.map((item, i) => (
            <Link
              key={i}
              className="d-block p-2"
              to={`/recipedetail/${item._id}`}
            >
              {item.recipe_name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
