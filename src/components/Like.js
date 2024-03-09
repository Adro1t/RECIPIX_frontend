import { useState } from "react";
import { Link } from "react-router-dom";
import like from "../images/like.png";
import React from "react";

const Like = () => {
 // State to manage the button color
 const [buttonColor, setButtonColor] = useState("black");

 // Function to toggle the button color
 const toggleColor = () => {
    setButtonColor(buttonColor === "black" ? "red" : "black");
 };

 return (
    <>
      <Link>
        <div className="card-icon">
          <button className="border-0" onClick={toggleColor}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={buttonColor} class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
          </button>
          {/* <button>
            <img src={comment} alt="" />
          </button> */}
        </div>
      </Link>
    </>
 );
};

export default Like;