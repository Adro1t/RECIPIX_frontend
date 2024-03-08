import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import "./OwnerRecipe.css";
import image from "../images/c2.jpg";

const OwnerRecipe = () => (
  <div className="card-container">
    <div className="card-background gap-3">
      <div className="image">
        <img className="recipe-image" src={image} alt="image" />
      </div>
      <div className="Details-container">
        <div className="d-flex justify-content-between">
          <h1 className="OwnerRecipe-heading">momo</h1>
          <div className="update d-flex justify-content-between">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="edit"
              >
                <path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path>
                <path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="delete"
              >
                <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <br />
        <h6 className="description">Description</h6>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos
          non facere tempore? Similique, obcaecati facere labore voluptas
          eveniet minus consectetur quo nulla esse hic impedit accusantium
          optio, consequuntur distinctio.
        </p>
      </div>
    </div>
  </div>
);

export default OwnerRecipe;
