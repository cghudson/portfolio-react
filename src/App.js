import React, { useState } from "react";
import { createContext } from "react";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

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

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navigation
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Navigation>

        <main>
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          {currentPage.name === "About" && <About></About>}
          {currentPage.name === "Portfolio" && <Portfolio></Portfolio>}
          {currentPage.name === "Resume" && <Resume></Resume>}
          {currentPage.name === "Contact" && <Contact></Contact>}
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
