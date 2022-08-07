import React from "react";
import pdf from "../images/HudsonCarolynResume.pdf";

function Resume() {
  return (
    <div className="container resume-page">
      <div className="card p-4 resume-text w-100">
        <h5>I am proficient in the following technologies:</h5>
        <p className="card p-4">
          <b>Front-End:</b> HTML, CSS, JavaScript, AJAX, jQuery, Bootstrap,
          React
          <br />
          <br />
          <b>Back-End:</b> Node.js, Express.js, MySQL, Sequelize, NoSQL,
          MongoDB, Mongoose
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
