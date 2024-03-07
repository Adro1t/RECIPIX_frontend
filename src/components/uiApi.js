import { API } from "../config";

//to fetch recipe by arrival date
export const getRecipe = async (sortBy, order, limit = undefined) => {
  try {
    const res = await fetch(
      `${API}/recipe/list?sortBy=${sortBy}&order=${order}&limit=${limit}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};

//to get all categories
export const getCategories = async () => {
  try {
    const res = await fetch(`${API}/category/list`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//to filter recipe by category and time
export const getFilteredRecipes = async (skip, limit, filters = {}) => {
  let data = { limit, skip, filters };
  try {
    const res = await fetch(`${API}/recipe/list/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//to fetch recipe details
export const recipeDetails = async (recipeId) => {
  try {
    const res = await fetch(`${API}/recipe/detail/${recipeId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//related list
export const relatedList = async (recipeId) => {
  try {
    const res = await fetch(`${API}/recipe/related/${recipeId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getIngredients = async (limit) => {
  try {
    const res = await fetch(`${API}/ingredient/list?limit=${limit}`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
