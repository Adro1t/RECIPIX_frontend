import { API } from "../config";

//to add category
export const createCategory = async (token, category) => {
  try {
    const res = await fetch(`${API}/category/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    });
    return await res.json();
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

//to add recipe
export const createRecipe = async (token, recipe) => {
  try {
    const res = await fetch(`${API}/recipe/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: recipe,
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//to show recipes
export const showRecipes = async () => {
  try {
    const res = await fetch(`${API}/recipe/list?limit=undefined`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//to get users information
export const getUsers = async () => {
  try {
    const res = await fetch(`${API}/user/list`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
