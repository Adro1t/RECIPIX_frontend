import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { recipeDetails, relatedList } from "../components/uiApi";
import { API } from "../config";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const RecipeDetails = (props) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleRecipe = (recipeId) => {
    recipeDetails(recipeId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setRecipe(data);
        setCategory(data.category.category_Name);
        setOwner(data.owner.name);

        //match category id for related recipes
        relatedList(data._id).then((related) => {
          if (related.error) {
            setError(related.error);
            console.log(error);
          } else {
            setRelatedRecipes(related);
          }
        });
      }
    });
  };
  useEffect(() => {
    loadSingleRecipe(recipeId);
  }, [recipeId]);
  return (
    <>
      <Nav />
      <h1>{recipe.recipe_name}</h1>
      <div className="text-warning">
        <i className="bi bi-star-fill "></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-half"></i>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="text-black">{recipe.rating}</span>
      </div>
      <img
        src={`${API}/${recipe.image}`}
        alt={"..." + recipe.recipe_name + "..."}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
      <p>{category}</p>
      <p>By {owner}</p>
      <h3>Description</h3>
      <p>{recipe.description}</p>
      <p>PrepTime {recipe.prep_time}</p>
      <p>Cooktime {recipe.cook_time}</p>
      <p>Total time {recipe.total_time}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instruction</h3>
      <p>{recipe.instructions}</p>

      {relatedRecipes.length > 0 && (
        <div>
          <h1>YOU MAY ALSO LIKE</h1>
          <div className="d-flex gap-4">
            {relatedRecipes.map((recipe, i) => (
              <Card key={i} props={recipe} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default RecipeDetails;
