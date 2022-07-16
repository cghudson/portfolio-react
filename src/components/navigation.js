import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <NavLink to="/">
            <li className="nav-item p-2">About Me</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="nav-item p-2">Portfolio</li>
          </NavLink>
          <NavLink to="/resume">
            <li className="nav-item p-2">Resume</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="nav-item p-2">Contact</li>
          </NavLink>
        </ul>
      </div>
    </Router>
  );
}

export default Navigation;
