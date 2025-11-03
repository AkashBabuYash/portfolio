import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1>Portfolio</h1>

      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        &#9776;
      </div>

    
      <ul className={menuOpen ? "menu active" : "menu"}>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/project">Projects</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/resume">Resume</NavLink></li>

       
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✖</button>
      </ul>
    </nav>
  );
}

export default Navbar;
