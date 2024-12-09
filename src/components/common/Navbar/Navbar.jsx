import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  }
  return (
    <header>
      <div className="top-container">
        <a id="logo-link" href="index.html">
          <img src="images/logotype.svg" alt="Silicon Logotype" />
        </a>
        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">
            Features
          </a>
        </nav>
        <div className="space"></div>

        <span className="dark-mode">Dark Mode</span>
        <label className="switch">
          <input
            type="checkbox"
            id="darkModeToggle"
            onChange={(e) => toggleDarkMode(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
        <script src="script.js"></script>

        <a href="#" id="auth-sign-in" className="btn-primary">
          <img id="sign-in-icon" src="images/sign-in-icon.svg" />
          <span>Sign in / up</span>
        </a>
      </div>
    </header>
  );
}
