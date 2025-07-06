import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className=" bg-primary">
    <nav className="navbar navbar-expand-lg container-fluid px-5 ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Intern House
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Job Postings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/postAJob">
                Post a Job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
