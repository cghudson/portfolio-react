import React from 'react'
import profilePicture from '../images/profile-picture.jpg'

function About() {
    return (
        <div>
            <section className="sections">
        <aside>
          <h2 id="about" className="section-title">
            ABOUT ME
          </h2>
        </aside>
        <div className="about">
          <div className="about-info">
            <p>
              Hello! My name is Carolyn. I am currently a Certified Veterinary
              Nurse, but I am learning to code throught the University of
              Wisconsin Extended Campus. Stay tuned for updates!
            </p>
          </div>
          <div className="profile-image">
            <img
              src={profilePicture}
              alt="Carolyn Hudson with her dog, Oliver"
            />
          </div>
        </div>
      </section>
        </div>
    )
}

export default About