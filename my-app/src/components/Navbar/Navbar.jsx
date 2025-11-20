import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    
    <nav className="navbar">
      <div className="nav-logo">Food Fusion</div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={closeMenu}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu} className="login-btn">
            Login
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
