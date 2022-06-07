import React, { useState } from "react";
import logo from "../../images/logonavbar.png"
import "./Navbar.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img className="nav-logo" href="/" src={logo} height={60} alt="logo"/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home">Inicio</a>
        <a href="#about">Nosotros</a>
        <a href="/service">Servicios</a>
        <a href="#contact">Testimonio</a>
        <div className="containerButtonNav">
          <button className="buttonNav">Registrate</button>
          <button className="buttonNavTwo">Ingresa</button>
        </div>
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

  
  

