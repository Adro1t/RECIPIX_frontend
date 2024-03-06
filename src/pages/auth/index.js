import { API } from "../../config";

//for signup
export const signup = async (user) => {
  try {
    const response = await fetch(`${API}/user/post`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//for signin
export const signin = async (user) => {
  try {
    const response = await fetch(`${API}/user/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//to authenticate
export const authenticate = async (data, next) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }
};

//redirect to authenticated by user role
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return localStorage.getItem("jwt")
    ? JSON.parse(localStorage.getItem("jwt"))
    : false;
};

//signout
export const signout = async (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt", JSON.stringify("jwt"));
    next();
    return fetch(`${API}/user/signout`, {
      method: "POST",
    })
      .then((res) => {
        console.log("signed out", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

//forget password
export const forgetPassword = async (user) => {
  try {
    const response = await fetch(`${API}/user/password/forget`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
