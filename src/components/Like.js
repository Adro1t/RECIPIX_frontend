import { Link } from "react-router-dom";
import like from "../images/like.png";
import React from "react";

const Like = () => {
  return (
    <>
      <Link to="/OwnerRecipe">
        <div className="card-icon">
          <button className="border-0">
            <img src={like} alt="" />
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
