import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Home.css";
import { getRecipe } from "../components/uiApi";

const Home = () => {
  const [recipeByArrival, setRecipeByArrival] = useState([]);

  const loadRecipeByArrival = () => {
    getRecipe("createdAt")
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setRecipeByArrival(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loadRecipeByArrival();
  }, []);

  return (
    <>
      <Nav />
      <Carousel />
      <div className="container-home">
        <div className="card-home">
          {recipeByArrival &&
            recipeByArrival.map(
              (recipe, i) => recipe && <Card key={i} props={recipe} />
            )}
        </div>
      </div>
      <h1 className="heading">Recommended Recipes</h1>
      <div className="container-home">
        <div className="card-home">
          {recipeByArrival &&
            recipeByArrival.map(
              (recipe, i) => recipe && <Card key={i} props={recipe} />
            )}
        </div>
      </div>

      <center>
        <button className="btn m-5 load-btn">Load More</button>
      </center>
      <Footer />
    </>
  );
};

export default Home;
