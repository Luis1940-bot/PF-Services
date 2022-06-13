import React, { useState } from "react";
import logo from "../../images/logonavbar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <Link to="/">
        <img className="nav-logo" href="/" src={logo} height={60} alt="logo" />
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">
          <span>Inicio</span>
        </Link>
        <Link to="/about">
          <span>Nosotros</span>
        </Link>
        <Link to="/offers">
          <span>Ofertas</span>
        </Link>
          <a href="#testimonials">Testimonio</a>
        <div className="containerButtonNav">
          <Link to="/signin">
            <button className="buttonOne buttonNav">Registrate</button>
          </Link>
          <Link to="/login">
            <button className="buttonOne buttonNavTwo">Ingresa</button>
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
