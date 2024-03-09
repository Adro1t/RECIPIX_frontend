import React, { useState } from "react";
import "./Preference.css";

const Preference = ({ ingredient, isSelected, onSelectionChange }) => {
  // Use one state variable for color
  const [color, setColor] = useState("#ffb700");
  const [textColor, setTextColor] = useState("white");

  const handleClick = () => {
    const newColor = color === "#ffb700" ? "#fff" : "#ffb700";
    const newTextColor = textColor === "white" ? "black" : "white";
    setColor(newColor);
    setTextColor(newTextColor);
    onSelectionChange(ingredient); // Pass the ingredient to the parent component
  };

  return (
    <>
      <div className="precontainer">
        <div
          className="precard"
          style={{ backgroundColor: color, color: textColor }}
          onClick={handleClick}
        >
          <h3>{ingredient}</h3>
        </div>
      </div>
    </>
  );
};

export default Preference;
