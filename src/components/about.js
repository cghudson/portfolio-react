import React from "react";
import profilePicture from "../images/profile-picture.jpg";

function About() {
  return (
    <div className="container about-page">
      <div className="about">
        <h2 className="title">ABOUT ME:</h2>
        <div className="about-info">
          <p>
            Hello, my name is Carolyn! I am currently a Certified Veterinary
            Nurse, but I am learning to code throught the University of
            Wisconsin Extended Campus. Stay tuned for updates!
          </p>
        </div>
        <div className="profile p-3">
          <img src={profilePicture} alt="Carolyn and her dog" />
        </div>
      </div>
    </div>
  );
}

export default About;