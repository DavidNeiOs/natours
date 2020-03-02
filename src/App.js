import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img
            src="img/logo-white.png"
            alt="logo white version"
            className="logo"
          />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens!</span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
