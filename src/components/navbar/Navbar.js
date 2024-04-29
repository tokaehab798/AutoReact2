import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Assume your CSS is in this file
import { NAVBAR_ROUTES } from "../../constants/routes";

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${
        !isScrolling ? "py-4" : ""
      }`}
      id="navbar-example2"
    >
      <div className="container">
        <div className="col-auto me-auto">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="image"
              style={{ width: "70px", height: "60px" }}
            />
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAVBAR_ROUTES.map((route, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className="nav-link fs-6 ms-2"
                  to={route.path}
                  //   activeClassName="bg-success text-white rounded-3"
                  //   className={({ isActive, isPending }) =>
                  //   isPending ? "pending" : isActive ? "active" : ""
                  // }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
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
