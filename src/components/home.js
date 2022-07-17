import React from "react";
import { NavLink } from "react-router-dom";
import profilePicture from "../images/profile-picture.jpg";

function Home() {
  return (
    <div className="home">
      <div className="greeting">
        <h2>Welcome to my portfolio!</h2>
        <NavLink to="/project">
          <button>View my Projects</button>
        </NavLink>
      </div>
      <div className="profile p-3">
        <img src={profilePicture} alt="Carolyn and her dog" />
      </div>
    </div>
  );
}

export default Home;
