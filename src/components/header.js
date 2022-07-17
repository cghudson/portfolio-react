import React from "react";
import Navigation from "./navigation";

function Header() {
  return (
    <div className="card header fixed-top">
      <div className="card-header">
        <div className="text-center">
          <h1 className="name">CAROLYN HUDSON</h1>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
