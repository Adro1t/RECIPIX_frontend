import React from "react";
import { Link } from "react-router-dom";
import recipix from "../images/Recipix.png";
import "./Footer.css";

const Footer = () => (
  <footer className="footer pt-5 pb-4">
    <div className="footer-container container text-md-left">
      <div className="row text-md-left">
        <div className="footer-col col-md-3 col-lg-3 col-lx-3 mx-auto mt-3">
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
        <div className="footer-col col-md-2 col-lg-2 col-lx-2 mx-auto mt-3">
          <h3 className="md-4">Company</h3>
          <ul>
            <li>
              <Link className="footer-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/explore">
                Explore
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Help
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Team
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/about">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col col-md-2 col-lg-2 col-lx-2 mx-auto mt-3">
          <h3 className="md-4">Resources</h3>
          <ul>
            <li>
              <Link className="footer-links" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Insight
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Use Cases
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col subscribe col-md-3 col-lg-3 col-lx-3 mt-3">
          <h3 className=" footer-logo">Register</h3>
          <p>
            Join now for delicious cooking tips and a flavor-packed experience!
          </p>
          <div className="d-flex flex-column justify-content-center small">
          <form className="mb-3">
            <div className="subscribe">
            <input type="email" placeholder="Your Email" />
            </div>
          </form>
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <hr className="text-dark mt-4 mb-4" />
        <div className="text-center footer-last row d-flex justify-contain-center">
          <p>&copy; 2024 RecipiX. All Rights Reserved.</p>
          <div className="d-flex justify-content-center gap-3">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
