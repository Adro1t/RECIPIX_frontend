import React, { useEffect, useState } from "react";
import "./GlassForPreference.css";
import Preference from "../components/Preference";

function GlassForPreference() {
  const [ingredients] = useState([
    "a",
    "b",
    "v",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "a",
    "b",
    "v",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
  ]);

  return (
    <div className="cont">
      <div className="glasspref gap-4">
        {ingredients.map((ingredient) => (
          <Preference props={ingredient} />
        ))}
      </div>
    </div>
  );
}

export default GlassForPreference;
