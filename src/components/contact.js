// setup for file modeled after UW Coding Bootcamp Module 20

import React from "react";

function Contact() {
  return (
    <section className="container card contact-me">
      <h1 className="title p-2">CONTACT ME:</h1>
      {/* <form id="contact-form"> */}
      <h6 className="card-body">Please reach out if you are interested in working on a project or would like to connect!</h6>
      <a href="mailto:cghudson@uwalumni.com">
        <i className="fa-solid fa-envelope fa-2x p-2 nav-item"></i>
      </a>
      <h6>carolyn.grace.hudson@gmail.com</h6>
      <h6>(414)736-6011</h6>

      {/* <button data-testid="button" type="submit" className="contact-btn">
          Submit
        </button> */}
      {/* </form> */}
    </section>
  );
}

export default Contact;
