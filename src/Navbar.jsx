import React, { useState } from "react";
import Home from "./assets/ele.png";
import "./App.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header className="navbar" 
     initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              y: { duration: 1, ease: "easeOut" },
              
            }}>
      {/* Logo */}
      <div className="logo">
        <img src={Home} className="logo-icon" alt="Elevora Logo" />
        <span className="logo-text">Elevora</span>
      </div>

      {/* Desktop nav links */}
      <nav className="nav-links">
        {["Home", "Services", "Resources", "About Us"].map((item, index) => (
          <a key={index} href="#" className="nav-item">
            {item}
            <span className="underline"></span>
          </a>
        ))}
      </nav>

      {/* Desktop button */}
      <button className="download-btn desktop-btn">Download app</button>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu active">
          {["Home", "Services", "Resources", "About Us"].map((item, idx) => (
            <a key={idx} href="#">
              {item}
            </a>
          ))}
          <button className="download-btn mobile-btn">Download app</button>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
