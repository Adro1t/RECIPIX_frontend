import React, { useEffect, useState } from "react";
import "./GlassForPreference.css";
import Preference from "../components/Preference";
import { updatePreferences } from "./uiApi";

const ingredients = [
  "rice",
  "potato",
  "tomato",
  "meat",
  "cabbage",
  "onion",
  "flour",
  "egg",
  "chicken",
  "cheese",
  "butter",
  "chocolate",
  "spinach",
  "noodles",
  "milk",
  "salt",
  "pepper",
  "cucumber",
  "mayonnaise",
  "ghee",
  "garlic",
  "ginger",
  "pork",
  "buff",
  "mutton",
];

const popularIngredients = [
  "rice",
  "tomato",
  "chicken",
  "cheese",
  "garlic",
  "onion",
];

function GlassForPreference({ props }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // function init() {
  //   getPreferences(props.token);
  // }

  const handleSelection = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient);
    const updatedSelection = isSelected
      ? selectedIngredients.filter((item) => item !== ingredient)
      : [...selectedIngredients, ingredient];
    setSelectedIngredients(updatedSelection);
  };

  const handleSave = (actionType) => {
    console.log(props.preferences);
    props.preferences =
      actionType === "next" ? selectedIngredients : popularIngredients;
    console.log(props.preferences);
    // Implement logic to save user preferences (e.g., API call, update local storage)
    updatePreferences(props.email, props.preferences);
    console.log(props);
  };

  useEffect(() => console.log(props), []);

  return (
    <div className="cont">
      <button
        className=""
        style={{ position: "fixed", bottom: "0", right: "0" }}
        onClick={() => handleSave("next")}
      >
        NEXT
      </button>
      <button
        className=""
        style={{ position: "fixed", bottom: "0", left: "0" }}
        onClick={() => handleSave("skip")}
      >
        SKIP
      </button>
      <div className="glasspref gap-4">
        {ingredients.map((ingredient) => (
          <Preference
            key={ingredient}
            ingredient={ingredient}
            isSelected={selectedIngredients.includes(ingredient)}
            onSelectionChange={handleSelection}
          />
        ))}
      </div>
    </div>
  );
}

export default GlassForPreference;
