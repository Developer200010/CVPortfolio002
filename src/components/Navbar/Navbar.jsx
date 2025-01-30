import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand" href="#">
            <i class="fa-solid fa-house"></i>
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="gap-4 d-flex gap-4">
            <Link to="/">
                <button class="btn btn-outline-success" type="submit">
                <i class="fa-solid fa-house"></i>
                Home
                </button>
              </Link>
              <Link to="/service">
                <button class="btn btn-outline-success" type="submit">
                <i class="fa-brands fa-servicestack"></i>
                  Service
                </button>
              </Link>
              <Link to="/project">
                <button class="btn btn-outline-success" type="submit">
                <i class="fa-solid fa-bars-progress" style={{paddingLeft:"5"}}></i>
                  Project
                </button>
              </Link>
              <Link to="/contact">
                <button class="btn btn-outline-success" type="submit">
                <i class="fa-solid fa-address-book"></i>
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
