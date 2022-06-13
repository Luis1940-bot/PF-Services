import React, { useState } from "react";
import logo from "../../images/logonavbar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img className="nav-logo" href="/" src={logo} height={60} alt="logo" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">
          <a href="#start">Inicio</a>
        </Link>
        <a href="#whatDoWeDo">Nosotros</a>
        <a href="#service">Servicios</a>
        <a href="#testimonials">Testimonio</a>
        <Link to="/offers">
          <span>Ofertas</span>
        </Link>
        <div className="containerButtonNav">
          <Link to="/signin">
            <button className="buttonNav">Registrate</button>
          </Link>
          <Link to="/login">
            <button className="buttonNavTwo">Ingresa</button>
          </Link>
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
