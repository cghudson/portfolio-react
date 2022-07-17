import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li className="nav-item p-2 m-1">
            <Link to="/about" className="text-decoration-none text-dark ">
              ABOUT
            </Link>
          </li>
          <li className="nav-item p-2 m-1">
            <Link to="/portfolio" className="text-decoration-none text-dark">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item p-2 m-1">
            <Link to="/resume" className="text-decoration-none text-dark">
              RESUME
            </Link>
          </li>
          <li className="nav-item p-2 m-1">
            <Link to="/contact" className="text-decoration-none text-dark">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default Navigation;
