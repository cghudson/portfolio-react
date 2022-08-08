import React from "react";
import profilePicture from "../images/profile-picture.jpg";

function About() {
  return (
    <div className="container about-page">
      <div className="about">
        <h2 className="title">ABOUT ME:</h2>
        <div className="about-info">
          <p>
            I am a Full Stack Web Developer with a background in zoology and
            veterinary care. I recently earned a Certificate in Full Stack Web
            Development from the University of Wisconsin Extended Campus where I
            developed skills in JavaScript, HTML, CSS, React, and creating
            interactive applications with responsive design.
            <br />
            <br />
            While I am not developing, I enjoy spending time with my dog,
            Oliver, going for long walks, playing piano, and listening to
            audiobooks or podcasts.
            <br />
            <br />I am excited to leverage my skills in the future as part of a
            fast-paced, quality driven team. Please feel free to reach out to
            chat about our next project on my Contact page!
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
