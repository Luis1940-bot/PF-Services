import React, { useState } from "react";
import logo from "../../img/logoivan.png"
import "./Navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} height={75} alt="logo"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Inicio</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

  
  

