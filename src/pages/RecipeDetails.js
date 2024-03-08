import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { recipeDetails, relatedList } from "../components/uiApi";
import { API } from "../config";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "./RecipeDetails.css";


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
      <h2 className="details-title">{recipe.recipe_name}</h2>
      <div className="Details-container">
        <div className="row">
          <div className="col-8 details-info">
            <div>
              <p className="text-decoration-underline pb-1">by {owner}</p>
              <p className="details-category">{category}</p>
              <br />
              <div className="d-flex gap-4 ">
              <p>PrepTime :  {recipe.prep_time} min</p>
              <p>|</p>
              <p>Cooktime :  {recipe.cook_time} min</p>
              <p>|</p>
              <p>Total time : {recipe.total_time} min</p>
              </div>
              <br />
              <h3>Description</h3>
              <p>{recipe.description}</p>
              <h3>Ingredients</h3>
              <p>{recipe.ingredients}</p>
              <h3>Instruction</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <div className="col-4">
            <img
            className="rounded"
              src={`${API}/${recipe.image}`}
              alt={"..." + recipe.recipe_name + "..."}
              style={{ width: "20vw", height: "20vw", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {relatedRecipes.length > 0 && (
        <div>
          <h1 className="youmaylike">YOU MAY ALSO LIKE</h1>
          <div className="card-home">
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
