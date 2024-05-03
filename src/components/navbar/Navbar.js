import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file
import { NAVBAR_ROUTES } from "../../constants/routes";

function Navbar() {
  const location = useLocation(); // Get the current location using useLocation()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-4" id="navbar-example2">
      <div className="container">
        <div className="col-auto me-auto">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="images/must logo - no background.png" // Update the path to your logo
              alt="image"
              className="navbar-brand"
              style={{ width: "70px", height: "60px" }}
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAVBAR_ROUTES.map((route, i) => (
              <li className="nav-item" key={i}>
                <NavLink
className={`nav-link fs-6 ms-2 ${location.pathname === route.path ? 'active text-white bg-success rounded' : ''}`}                  to={route.path}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Training
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/internaltraining">
                    Internal Training
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/externaltraining">
                    External Training
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <Link
              className="btn btn-outline-success shadow btn text-center"
              to="/login"
            >
              Log Out
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
