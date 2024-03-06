import React, { useEffect, useState } from "react";
import { getIngredients, getRecipe } from "./uiApi";
import Card from "./Card";
import { isAuthenticated } from "../pages/auth";

const RecommendedRecipes = () => {
  const [allIngredients, setAllIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { user } = isAuthenticated();
  const preferences = user.preferences;

  const fetchData = async () => {
    try {
      const ingredientsResponse = await getIngredients();
      const recipesResponse = await getRecipe("recipe_name", "asc");

      setRecipes(recipesResponse);
      setAllIngredients(ingredientsResponse);

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
    // Convert user preferences to TF-IDF vector
    const userVector = ingredientsToTFIDFVector(
      userPreferences,
      allIngredientNames
    );

    const recommendations = [];
    for (let i = 0; i < recipes.length; i++) {
      const recipeVector = recipeTFIDFVectors[i];
      const similarity = cosineSimilarity(userVector, recipeVector);
      if (similarity > 0.5) {
        // Adjust threshold as needed
        recommendations.push(recipes[i]);
      }
    }
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
    fetchData();
    // console.log(preferences);
  });

  return (
    <>
      {recommendations.map((recipe, i) => (
        <Card key={i} props={recipe} />
      ))}
    </>
  );
};
export default RecommendedRecipes;