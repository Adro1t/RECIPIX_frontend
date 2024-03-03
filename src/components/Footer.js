import React from "react";
import { Link } from "react-router-dom";
import recipix from "../images/Recipix.png";
import "./Footer.css";

const Footer = () => (
  <>
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col">
        <div className="footer-logo">
          <Link className="" to="/">
            <img className="img-logo" src={recipix} alt=""></img>
            RecipiX
          </Link>
        </div>
        <p>
          Recipix is a recipe website with a wide verity of delicious recipes,
          easy-to-use search function. Join our community and let's cook
          together!.
        </p>
      </div>
      <div className="footer-col">
        <h3>Company</h3>
        <ul>
          <li>
            <Link className="" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              Help
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              Team
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Resources</h3>
        <ul>
          <li>
            <Link className="" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="" to="/">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              Insight
            </Link>
          </li>
          <li>
            <Link className="" to="/explore">
              Use Cases
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col subscribe">
        <h3>Register</h3>
        <p>
          Join now for delicious cooking tips and a flavor-packed experience!
        </p>
        <form>
          <input type="email" placeholder="Your Email   @" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </footer>
  <div className="footer-last">
  <p>&copy; 2024 RecipiX. All Rights Reserved.</p>
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/terms">Terms</Link>
</div>
</>
);

export default Footer;
