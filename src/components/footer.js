import React from "react";

function Footer() {
  return (
    <footer className="card fixed-bottom">
      <div className="card-footer d-flex justify-content-center">
        <ul className="navbar m-2 p-2">
          <li className="m-2">
            <a href="mailto:cghudson@uwalumni.com">
              <i className="fa-solid fa-envelope fa-2x p-2 nav-item"></i>
            </a>
          </li>
          <li className="m-2">
            <a href="https://github.com/cghudson" target="_blank">
              <i className="fa-brands fa-github-square fa-2x p-2 nav-item"></i>
            </a>
          </li>
          <li className="m-2">
            <a
              href="https://www.linkedin.com/in/carolyn-grace-hudson/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin fa-2x p-2 nav-item"></i>
            </a>
          </li>
          <li className="m-2">
            <a href="https://stackoverflow.com/users/17782192/carolyn-hudson" target="_blank">
              <i className="fa-brands fa-stack-overflow fa-2x p-2 nav-item"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
