import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./Preference.css";

const Preference = () => {
 // State to store the current color
 const [color, setColor] = useState("#ffb700");
 const [color1, setColor1] = useState("#ffffff");
 
 // Function to handle click event and change color
 const handleClick = () => {
    // Toggle between red and blue colors
    const newColor = color === "#ffb700" ? "#fff" : "#ffb700";
    const newColor1 = color1 === "#ffffff" ? "#000000" : "#ffffff";
    setColor(newColor);
    setColor1(newColor1);
 };

 return (
    <>
      <div className="precontainer">
        <div
          className="precard"
          style={{
            backgroundColor: color,
            color: color1
          }}
          onClick={handleClick}
        >
          <h3>hello world</h3>
        </div>
      </div>
    </>
 );
};

export default Preference;