// src/components/Header.jsx
import React from "react";
// optional if you need extra styling

function Header() {
  return (
    <nav className="dmSans fixed-top mt-3 px-4" style={{ width: "100%" }}>
  <div className="container-fluid d-flex justify-content-between align-items-center">
    
    {/* Left: Name */}
    <p className="mb-0 fw-bold text-dark" style={{ whiteSpace: "nowrap" }}>
      &lt; <span className="whisperFont">Vraj Gautam</span> /&gt;
    </p>

    {/* Center: Glass pill nav */}
    <div
      className="glass-header shadow-sm rounded-pill px-4 py-2 d-flex justify-content-center"
      style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
        <li className="nav-item">
          <a className="nav-link text-black fw-semibold" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#">Articles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="#">Contact</a>
        </li>
      </ul>
    </div>

    {/* Right: Light mode icon */}
    <div className="theme-toggle-icon">
      <i className="fas fa-sun text-warning" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
    </div>

  </div>
</nav>

  );
}

export default Header;
