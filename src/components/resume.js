import React from "react";
import pdf from "../images/HudsonCarolynResume.pdf";

function Resume() {
  return (
    <div className="container resume-page">
      <div className="card p-4 resume-text">
        <h5>I am proficient in the following technologies:</h5>
        <p className='card p-4'>
          HTML, CSS, Git, Responsive Design, JavaScript, Bootstrap, jQuery,
          AJAX, Node.js, Express.js, SQL, Sequelize, NoSQL, MongoDB, Mongoose,
          React
        </p>
        <div>
          <button className="resume-btn">
            <a href={pdf} download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
