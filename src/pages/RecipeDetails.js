import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {
  getUserDetails,
  recipeDetails,
  relatedList,
} from "../components/uiApi";
import { API } from "../config";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import "./RecipeDetails.css";
import { isAuthenticated } from "./auth";
import Like from "../components/Like";
import ShareRecipe from "./ShareRecipe";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [error, setError] = useState(false);

  const [userDetails, setUserDetails] = useState();
  const { token, user } = isAuthenticated();

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

  function splitInstructions(instructions) {
    // Check if the input string contains numbers
    const containsNumbers = /\d/.test(instructions);

    let stepsArray;

    // Use different splitting approach based on whether numbers are present
    if (containsNumbers) {
      stepsArray = instructions
        .split(/\d+\./)
        .filter((item) => item.trim() !== "");
    } else {
      stepsArray = instructions.split(".").filter((item) => item.trim() !== "");
    }

    // Format the steps with numbers
    const desiredOutput = stepsArray.map(
      (item, index) => `${index + 1}. ${item.trim()}`
    );

    return desiredOutput;
  }

  useEffect(() => {
    init();
    loadSingleRecipe(recipeId);
  }, [recipeId]);

  return (
    <>
      <Nav />
      <div className="Details-container container-fluid">
        <h2 className="details-title d-flex align-item-center gap-4">
          {recipe.recipe_name}
          <Like props={recipe} userDetails={userDetails} />
        </h2>
        <div className="row">
          <div className="col-8 details-info">
            <div>
              <p className="text-decoration-underline pb-1">by {owner}</p>
              <p className="details-category">{category}</p>
          <ShareRecipe />
              <br />
              <div className="d-flex gap-4 ">
                <p>PrepTime : {recipe.prep_time} min</p>
                <p>|</p>
                <p>Cooktime : {recipe.cook_time} min</p>
                <p>|</p>
                <p>Total time : {recipe.total_time} min</p>
              </div>

              <h3>Description</h3>
              <p className="">{recipe.description}</p>
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
          <div>
            <h3>Ingredients</h3>
            <ul className="list-group gap-2 ingredients-list">
              {recipe.ingredients &&
                recipe.ingredients.split(",").map((ingredient, i) => (
                  <li className="list-group-item rounded-5" key={i}>
                    {ingredient !== "" ? `${ingredient},` : ""}
                  </li>
                ))}
            </ul>
            <h3>Instruction</h3>
            {recipe.instructions &&
              splitInstructions(recipe.instructions).map((item, i) => (
                <p key={i}>{item}</p>
              ))}{" "}
          </div>
        </div>
      </div>
      {relatedRecipes.length > 0 && (
        <div className="container">
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
