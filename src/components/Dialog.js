import React from "react";
import { deleteRecipe } from "./uiApi";

const Dialog = ({ props, onHide }) => {
  const deleteFunction = () => {
    deleteRecipe(props._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        onHide();
      }
    });
  };

  console.log(props);
  return (
    <>
      <div
        className="bg-white p-5 rounded-5 shadow-lg"
        style={{
          zIndex: "100",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
        }}
      >
        <h2>Do you want to delete this recipe?</h2>
        <h3>{props.recipe_name}</h3>
        <button
          className="py-2  px-3 mx-2 text-white bg-danger border-0 rounded-3"
          onClick={deleteFunction}
        >
          Yes
        </button>
        <button
          className="py-2 px-3 mx-2  bg-success text-white border-0 rounded 3"
          onClick={() => onHide()}
        >
          No
        </button>
      </div>
    </>
  );
};

export default Dialog;
