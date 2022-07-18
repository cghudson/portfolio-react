import React, { useState } from "react";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";

function App() {
  const pages = [
    {
      name: "About",
      link: "/home",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Resume",
      link: "/resume",
    },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Navigation>

      <main>
        {currentPage.name === "About" && <About></About>}
        {currentPage.name === "Portfolio" && <Portfolio></Portfolio>}
        {currentPage.name === "Resume" && <Resume></Resume>}
        {currentPage.name === "Contact" && <Contact></Contact>}
      </main>
      <Footer />
    </>
  );
}

export default App;
