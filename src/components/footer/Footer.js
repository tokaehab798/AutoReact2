import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Your CSS file for styles

function Footer() {
  return (
    <footer className="py-5 maincolor text-white">
      <div className="container">
        <div className="row">
          {/* First Footer section: Icons */}
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <i className="fab fa-facebook-f border TheIcons m-2"></i>
              <i className="fab fa-twitter border TheIcons m-2"></i>
              <i className="fab fa-linkedin-in border TheIcons m-2"></i>
              <i className="fab fa-youtube border TheIcons m-2"></i>
              <i className="fab fa-instagram border TheIcons m-2"></i>
            </div>
          </div>

          <div className="col-lg-2"></div>

          {/* Second Footer section: Pages */}
          <div className="col-lg-2">
            <h6>Pages</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/home" className="nav-link p-0 text-white fw-lighter">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/about"
                  className="nav-link p-0 text-white fw-lighter"
                >
                  About
                </Link>
              </li>
              {/* Additional links */}
            </ul>
          </div>

          {/* Third Footer section: Company */}
          <div className="col-lg-2">
            <h6>Company</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/terms"
                  className="nav-link p-0 text-white fw-lighter"
                >
                  Terms Condition
                </Link>
              </li>
              {/* Additional links */}
            </ul>
          </div>

          {/* Fourth Footer section: Community */}
          <div className="col-lg-2">
            <h6>Community</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/help" className="nav-link p-0 text-white fw-lighter">
                  Help center
                </Link>
              </li>
              {/* Additional links */}
            </ul>
          </div>
        </div>

        {/* Additional content for the footer */}
        <div className="d-flex justify-content-center py-4 my-4 border-top flex-column">
          <ul className="d-flex flex-row justify-content-center align-items-center pt-3">
            <li className="mb-2 list-unstyled">
              <Link
                to="/about"
                className="me-4 text-decoration-none text-white fw-lighter"
              >
                About
              </Link>
            </li>
            {/* Additional links */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
