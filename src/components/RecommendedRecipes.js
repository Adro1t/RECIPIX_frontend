import React, { useEffect, useState } from "react";
import { getIngredients, getRecipe, getUserDetails } from "./uiApi";
import Card from "./Card";
import { isAuthenticated } from "../pages/auth";

const RecommendedRecipes = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { token, user } = isAuthenticated();
  const [preferences, setPreferences] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  const init = async () => {
    try {
      const ingredientsResponse = await getIngredients();
      const recipesResponse = await getRecipe("recipe_name", "asc");
      const preferencesResponse = await getUserDetails(token, user._id);
      setAllIngredients(ingredientsResponse);
      setRecipes(recipesResponse);
      setPreferences(preferencesResponse.preferences);
      setRecommendations(recommendRecipes(preferences));
    } catch (err) {
      console.log(err);
    }
  };

  function ingredientsToTFIDFVector(ingredients, allIngredients) {
    // Count occurrences of each ingredient in all recipes
    const ingredientCounts = allIngredients.map((ingredient) => 0);
    recipes.forEach((recipe) => {
      recipe.ingredientArray.forEach((ingredient) => {
        const index = allIngredients.indexOf(ingredient);
        if (index !== -1) {
          ingredientCounts[index]++;
        }
      });
    });
    console.log(ingredientCounts)

    // Calculate TF-IDF for each ingredient in the current recipe
    const tfidfVector = allIngredients.map((ingredient, index) => {
      const termFrequency = ingredients.includes(ingredient) ? 1 : 0;
      const documentFrequency = ingredientCounts[index];
      const inverseDocumentFrequency = Math.log(
        recipes.length / (documentFrequency + 1)
      );
      return termFrequency * inverseDocumentFrequency;
    });

    return tfidfVector;
  }

  // Function to recommend recipes based on user preferences
  function recommendRecipes(userPreferences) {
    // Extract all unique ingredients from recipes
    const allIngredientNames = allIngredients.map(
      (ingredient) => ingredient.ingredientName
    );
    // Pre-compute TF-IDF vectors for all recipes
    const recipeTFIDFVectors = recipes.map((recipe) =>
      ingredientsToTFIDFVector(recipe.ingredientArray, allIngredientNames)
    );
    
    console.log("New start");
    // console.log(" User Preference: ");
    // console.log(userPreferences);
    // console.log("recipeTFIDFVectors");
    // console.log(recipeTFIDFVectors);
    // Convert user preferences to TF-IDF vector
    const userVector = ingredientsToTFIDFVector(
      userPreferences,
      allIngredientNames
    );
    
    // console.log("User Vector");
    // console.log(userVector);

    const recommendations = [];
    console.log("similarity between user preference and recipes")
    for (let i = 0; i < recipes.length; i++) {
      const recipeVector = recipeTFIDFVectors[i];
      const similarity = cosineSimilarity(userVector, recipeVector);
      if (similarity > 0.2) {
        if (recommendations.length === 10) {
          break; // Stop iterating once 10 recommendations are found
        }
        // Adjust threshold as needed
        // console.log(similarity,recipes[i].recipe_name);
        recommendations.push(recipes[i]);
        // console.log(similarity,recipes[i]);
      }
      // to display all recipe similarity in console
      console.log(similarity,recipes[i].recipe_name);
      
    }
    console.log("recommended recipe")
    console.log(recommendations);

    setFetchingData(false);
    return recommendations;
  }

  // Function to calculate cosine similarity between two vectors
  function cosineSimilarity(vector1, vector2) {
    const dotProduct = vector1.reduce(
      (acc, val, i) => acc + val * vector2[i],
      0
    );
    const magnitude1 = Math.sqrt(
      vector1.reduce((acc, val) => acc + val ** 2, 0)
    );
    const magnitude2 = Math.sqrt(
      vector2.reduce((acc, val) => acc + val ** 2, 0)
    );
    return dotProduct / (magnitude1 * magnitude2);
  }

  useEffect(() => {
    init();
  }, [fetchingData]);

  return (
    <>
      {recommendations.map((recipe, i) => (
        <Card key={recipe._id} props={recipe} />
      ))}
    </>
  );
};
export default RecommendedRecipes;
