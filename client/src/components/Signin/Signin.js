import "../Signin/Signin.css";

import UserRegister from "../User/User.js";
import React from "react";
import image from "../Signin/Images/doctor_PNG15965.png";
// import image2 from "../Signin/Images/doctor_PNG15997.png";
// import { Link } from "react-router-dom";

const Signin = () => {
  const [state, setstate] = React.useState(true);
  const handleClick = () => {
    if (state === true) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  return (
    <>
      <div className="container-signin">
        <div className="container-form-img">
          <img className="side" src={image} alt="Sign In Help" />
        </div>

        <div className="container-form-sign">
          <h1 className="sign-tittle">
            Registra <span className="other">tus Datos</span>
          </h1>
          <div className="change">
            <span className="sign-text">¿Quisieras prestar tus servicios?</span>

            <span className="sign-text1">
              Presiona aquí y Completa tus Datos
            </span>
            <label className="switch">
              <input type="checkbox" onClick={handleClick} />
              <span className="slider round"></span>
            </label>
          </div>
          {state === false ? (
            <div>
              <UserRegister />
              <div className="sign-prof">
                <div className="sign-spaces">
                  <label className="sign-label">Tarifa*:</label>
                  <input
                    className="inputs"
                    id="tuition"
                    type="text"
                    placeholder="Tarifa"
                  />
                  <span className="sign-error">Este campo es obligatorio.</span>
                  <label className="sign-label">URL Photo*:</label>
                  <input
                    className="inputs"
                    id="photo"
                    type="text"
                    placeholder="URL photo"
                  />
                  <span className="sign-error">Este campo es obligatorio.</span>
                  <label className="sign-label">Especialidad*:</label>
                  <input
                    className="inputs"
                    id="speciality"
                    type="text"
                    placeholder="Especialidad"
                  />
                  <span className="sign-error">Este campo es obligatorio.</span>
                </div>
                <div className="sign-spaces">
                  <label className="sign-label">Capacitaciones*:</label>
                  <input
                    className="inputs"
                    id="trainings"
                    type="text"
                    placeholder="Capacitaciones"
                  />
                  <button className="principalButton">
                    Añadir Capacitación
                  </button>
                  <ul>
                    <li>a</li>
                    <li>a</li>
                  </ul>
                  <span className="sign-error">Este campo es obligatorio.</span>
                </div>
                <div className="sign-button">
                  <button className="principalButton" type="submit">
                    Registra Datos Profesionales
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <UserRegister />
          )}
        </div>
      </div>
    </>
  );
};

export default Signin;
{
  /* <h1 className="title">Registrate</h1>
          <form className="sign-form">
            <label className="label">Email*:</label>
            <input
              className="inputs"
              type="text"
              placeholder="User Name or E-mail"
            />
            <span className="error">El email ingresado no es válido.</span>
            <label className="label">Password*:</label>
            <input className="inputs" type="password" placeholder="Password" />
            <span className="error">
              Debe contener por lo menos 8 caracteres.
            </span>
            <input
              className="inputs"
              type="password"
              placeholder="Confirm Password"
            />
            <span className="error">
              Debe contener por lo menos 8 caracteres.
            </span>
            <div className="pass">
              <label className="conditions">
                <input className="box" type="checkbox" />
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>
            <button className="signInButton">Registrarse</button>
          </form> */
}
