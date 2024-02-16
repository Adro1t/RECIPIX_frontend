import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const RecipeDetails = () => {
  return (
    <>
      <Nav />
      <h1>Recipe Name</h1>
      <img src="" alt="recipe_image" />
      <p>By owner</p>
      <p>prep time</p>
      <p>Cook time</p>
      <p>Total time</p>
      <h3>Instruction</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, id obcaecati necessitatibus illum dolore
        expedita quibusdam illo veritatis fugiat, ad voluptate suscipit facere pariatur labore doloremque rerum nemo
        incidunt possimus.
      </p>
      <Footer />
    </>
  );
};

export default RecipeDetails;
