import React from "react";
import Project from "./project";

function Portfolio(props) {
  const { setCurrentProject } = props;

  const projects = [
    // {
    //   name: "Wrapped in Bananas",
    //   identifier: "wrapped-in-bananas",
    //   tools: "",
    //   color: require(""),
    //   github: "https://github.com/cthomas265/wrapped-in-bananas",
    //   deploy: "",
    // },
    {
      name: "Meditation Buddy",
      identifier: "meditation-buddy",
      tools: "JavaScript, HTML, Bulma/CSS",
      color: require("../images/meditation-buddy.jpg"),
      github: "https://github.com/Mazattack1999/meditation-buddy",
      deploy: "https://mazattack1999.github.io/meditation-buddy/",
    },
    {
      name: "Book Bits",
      identifier: "book-bits",
      tools: "JavaScript, Handlebars, Bootstrap/CSS",
      color: require("../images/book-bits.jpg"),
      github: "https://github.com/Mazattack1999/book-bits",
      deploy: "https://book-bits-blog.herokuapp.com/",
    },
    {
      name: "Password Generator",
      identifier: "password-generator",
      tools: "JavaScript, HTML, CSS",
      color: require("../images/password-generator.png"),
      github: "https://github.com/cghudson/password-generator",
      deploy: "https://cghudson.github.io/password-generator/",
    },
    {
      name: "Weather Dashboard",
      identifier: "weather-dashboard",
      tools: "JavaScript, HTML, Bootstrap/CSS",
      color: require("../images/weather-dashboard.jpg"),
      github: "https://github.com/cghudson/weather-dashboard",
      deploy: "https://cghudson.github.io/weather-dashboard/",
    },
    {
      name: "Work Day Scheduler",
      identifier: "work-day-scheduler",
      tools: "JavaScript, HTML, Bootstrap/CSS",
      color: require("../images/work-day-scheduler.jpg"),
      github: "https://github.com/cghudson/work-day-scheduler",
      deploy: "https://cghudson.github.io/work-day-scheduler/",
    },
    {
      name: "Code Quiz",
      identifier: "code-quiz",
      tools: "JavaScript, HTML, CSS",
      color: require("../images/code-quiz.jpg"),
      github: "https://github.com/cghudson/code-quiz",
      deploy: "https://cghudson.github.io/code-quiz/",
    },
    {
      name: "Tech Blog",
      identifier: "tech-blog",
      tools: "JavaScript, Handlebars, Bootstrap/CSS",
      color: require("../images/tech-blog.jpg"),
      github: "https://github.com/cghudson/tech-blog",
      deploy: "https://carolyn-tech-blog.herokuapp.com/",
    },
    {
      name: "E-Commerce",
      identifier: "e-commerce",
      tools: "JavaScript, Node.js, MySQL",
      color: require("../images/e-commerce.jpg"),
      github: "https://github.com/cghudson/e-commerce",
      // deploy: "",
    },
    {
      name: "Employee Tracker",
      identifier: "employee-tracker",
      tools: "JavaScript, Node.js, MySQL",
      color: require("../images/employee-tracker.jpg"),
      github: "https://github.com/cghudson/employee-tracker",
      // deploy: "",
    },
    {
      name: "Note Taker",
      identifier: "note-taker",
      tools: "JavaScript, HTML, Node.js, Bootstrap/CSS",
      color: require("../images/note-taker.jpeg"),
      github: "https://github.com/cghudson/note-taker",
      deploy: "https://carolyn-note-taker.herokuapp.com/",
    },
    {
      name: "Team Profile Generator",
      identifier: "team-profile-generator",
      tools: "JavaScript, HTML, Node.js, Bootstrap/CSS",
      color: require("../images/team-profile-generator.jpg"),
      github: "https://github.com/cghudson/team-profile-generator",
      // deploy: "",
    },
    {
      name: "README Generator",
      identifier: "readme-generator",
      tools: "JavaScript, Inquirer",
      color: require("../images/readme-generator.jpg"),
      github: "https://github.com/cghudson/readme-generator",
      // deploy: "",
    },
  ];

  return (
    <div className="container project-page">
      <aside>
        <h2 className="title">PROJECTS:</h2>
      </aside>
      <div className="work m-auto p-auto">
        {projects.map((project) => {
          return (
            <Project
              project={project}
              setCurrentProject={setCurrentProject}
              key={project.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
