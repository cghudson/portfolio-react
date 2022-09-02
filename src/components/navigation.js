import React from "react";
import Sparkle from "react-sparkle";

function Navigation(props) {
  const { pages, currentPage, setCurrentPage } = props;
  
  return (
    <header className="card header">
      <div className="card-header">
        <div className="text-center">
          <h1 className="name">CAROLYN HUDSON</h1>
          <Sparkle minSize={8} maxSize={15} flickerSpeed="slower" />
        </div>

        <nav>
          <ul className="d-flex flex-row nav">
            {pages.map((page) => {
              return (
                <li className="text-decoration-none p-2 m-1" key={page.name}>
                  <span
                    className={currentPage.name === page.name ? `text-light text-uppercase` : `text-muted`} 
                    href={page.link}
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                    {page.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
