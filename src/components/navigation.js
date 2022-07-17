import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Navigation(props) {
    const {
        aboutSelected,
        portfolioSelected,
        resumeSelected,
        contactSelected,
      } = props;

  return (
    <Router>
      <div>
        <ul className="nav">
          <NavLink onClick={() => aboutSelected(true)} to="/home" className="text-decoration-none text-dark">
            <li className="nav-item p-2 m-1">ABOUT</li>
          </NavLink>
          <NavLink onClick={() => portfolioSelected(true)} to="/portfolio" className="text-decoration-none text-dark">
            <li className="nav-item p-2 m-1">PORTFOLIO</li>
          </NavLink>
          <NavLink onClick={() => resumeSelected(true)} to="/resume" className="text-decoration-none text-dark">
            <li className="nav-item p-2 m-1">RESUME</li>
          </NavLink>
          <NavLink onClick={() => contactSelected(true)} to="/contact" className="text-decoration-none text-dark">
            <li className="nav-item p-2 m-1">CONTACT</li>
          </NavLink>
        </ul>
      </div>
    </Router>
  );
}

export default Navigation;
