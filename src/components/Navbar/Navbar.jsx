import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS file

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <Link to="/CVPortfolio002">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-house"></i>
            </a>
          </Link>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="gap-4 d-flex gap-4">
              <Link to="/CVPortfolio002">
                <button className="btn btn-outline-success">
                  <i className="fa-solid fa-house"></i>
                  Home
                </button>
              </Link>
              <Link to="/service">
                <button className="btn btn-outline-success">
                  <i className="fa-brands fa-servicestack"></i>
                  Service
                </button>
              </Link>
              <Link to="/project">
                <button className="btn btn-outline-success">
                  <i className="fa-solid fa-bars-progress"></i>
                  Project
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-outline-success">
                  <i className="fa-solid fa-address-book"></i>
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
