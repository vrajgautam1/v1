// src/components/Header.jsx
import React from "react";
 // optional if you need extra styling

function Header() {
  return (
    <nav className="dmSans navbar navbar-expand-lg glass-header fixed-top shadow-sm rounded-pill mx-auto mt-3 px-4" style={{ maxWidth: "500px" }}>
  <div className="container-fluid justify-content-center">
    <ul className="navbar-nav gap-4">
      <li className="nav-item">
        <a className="nav-link active text-primary fw-semibold" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Articles</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Header;
