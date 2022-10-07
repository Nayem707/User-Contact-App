import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <b>User Contact</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact
              </Link>
            </li>

            <div>
              <form className="container">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
