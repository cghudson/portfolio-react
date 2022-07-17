import React from "react";
import Navigation from "./navigation";
import Sparkle from "react-sparkle";

function Header() {
  return (
    <div className="card header fixed-top">
      <div className="card-header">
        <div className="text-center">
          <h1 className="name">CAROLYN HUDSON</h1>
          <Sparkle minSize={8} maxSize={15} flickerSpeed="slower" />
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
