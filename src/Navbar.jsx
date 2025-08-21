import React, { useEffect } from "react";
import Home from "./assets/ele.png";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // run only once
    });
  }, []);

  return (
    <header className="navbar" data-aos="fade-down">
      {/* Logo */}
      <div className="logo">
        <img src={Home} className="logo-icon" alt="Elevora Logo" />
        <span className="logo-text">Elevora</span>
      </div>

      {/* Nav Links */}
      <nav className="nav-links">
        {["Home", "Services", "Resources", "About Us"].map((item, index) => (
          <a key={index} href="#" className="nav-item">
            {item}
            <span className="underline"></span>
          </a>
        ))}
      </nav>

      {/* Button */}
      <button className="download-btn">Download app</button>
    </header>
  );
};

export default Navbar;
