import React from "react";

function Portfolio() {
  return (
    <div className="container project-page">
      <aside>
        <h2 className="title">PROJECTS</h2>
      </aside>
      <div className="work m-auto p-auto">
        <a
          href="https://mazattack1999.github.io/meditation-buddy/"
          target="_blank"
          className="project"
          id="meditation-buddy"
        >
          <div className="banner container">
            <h3 className="project-title">Meditation Buddy</h3>
            <h6 className="project-info">JavaScript, HTML, Bulma/CSS</h6>
          </div>
        </a>
        <a
          href="https://book-bits-blog.herokuapp.com/"
          target="_blank"
          className="project"
          id="book-bits"
        >
          <div className="banner">
            <h3 className="project-title">Book Bits</h3>
            <h6 className="project-info">
              JavaScript, Handlebars, Bootstrap/CSS
            </h6>
          </div>
        </a>
        <a
          href="https://cghudson.github.io/password-generator/"
          target="_blank"
          className="project"
          id="password-generator"
        >
          <div className="banner">
            <h3 className="project-title">Password Generator</h3>
            <h6 className="project-info">JavaScript, HTML, CSS</h6>
          </div>
        </a>
        <a
          href="https://cghudson.github.io/weather-dashboard/"
          target="_blank"
          className="project"
          id="weather-dashboard"
        >
          <div className="banner">
            <h3 className="project-title">Weather Dashboard</h3>
            <h6 className="project-info">JavaScript, HTML, Bootstrap/CSS</h6>
          </div>
        </a>
        <a
          href="https://cghudson.github.io/work-day-scheduler/"
          target="_blank"
          className="project"
          id="work-day-scheduler"
        >
          <div className="banner">
            <h3 className="project-title">Work Day Scheduler</h3>
            <h6 className="project-info">JavaScript, HTML, Bootstrap/CSS</h6>
          </div>
        </a>
        <a
          href="https://cghudson.github.io/code-quiz/"
          target="_blank"
          className="project"
          id="code-quiz"
        >
          <div className="banner">
            <h3 className="project-title">Code Quiz</h3>
            <h6 className="project-info">JavaScript, HTML, CSS</h6>
          </div>
        </a>
        <a
          href="https://carolyn-tech-blog.herokuapp.com/"
          target="_blank"
          className="project"
          id="tech-blog"
        >
          <div className="banner">
            <h3 className="project-title">Tech Blog</h3>
            <h6 className="project-info">
              JavaScript, Handlebars, Bootstrap/CSS
            </h6>
          </div>
        </a>
        <a
          href="https://github.com/cghudson/e-commerce"
          target="_blank"
          className="project"
          id="e-commerce"
        >
          <div className="banner">
            <h3 className="project-title">E-Commerce</h3>
            <h6 className="project-info">JavaScript, Node.js, MySQL</h6>
          </div>
        </a>
        <a
          href="https://github.com/cghudson/employee-tracker"
          target="_blank"
          className="project"
          id="employee-tracker"
        >
          <div className="banner">
            <h3 className="project-title">Employee Tracker</h3>
            <h6 className="project-info">JavaScript, Node.js, MySQL</h6>
          </div>
        </a>
        <a
          href="https://carolyn-note-taker.herokuapp.com/"
          target="_blank"
          className="project"
          id="note-taker"
        >
          <div className="banner">
            <h3 className="project-title">Note Taker</h3>
            <h6 className="project-info">
              JavaScript, HTML, Node.js, Bootstrap/CSS
            </h6>
          </div>
        </a>
        <a
          href="https://github.com/cghudson/team-profile-generator"
          target="_blank"
          className="project"
          id="team-profile-generator"
        >
          <div className="banner">
            <h3 className="project-title">Team Profile Generator</h3>
            <h6 className="project-info">
              JavaScript, HTML, Node.js, Bootstrap/CSS
            </h6>
          </div>
        </a>
        <a
          href="https://github.com/cghudson/readme-generator"
          target="_blank"
          className="project"
          id="readme-generator"
        >
          <div className="banner">
            <h3 className="project-title">README Generator</h3>
            <h6 className="project-info">JavaScript, Inquirer</h6>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
