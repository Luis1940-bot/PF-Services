import React from "react";
import "./Login.css";
import { useFormik } from "formik";

import { login } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import image from "./helpImages/doctor_PNG15967.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Landingpage/Landingpage.js";
const initialValues = { email: "", password: "" };

const Login = () => {
  // const history = useHistory();
  const state = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(login(values));
    },
    validate,
  });

  return (
    <>
      {state === true ? (
        <Home />
      ) : (
        <div className="container-login">
          <div className="container-form">
            <h1 className="title">
              <span className="span-login">Inicia</span> tu Sesión
            </h1>
            <form onSubmit={formik.handleSubmit} className="log-form">
              <label className="label">Email*:</label>
              <input
                className="email"
                id="email"
                type="text"
                placeholder="E-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="error1">{formik.errors.email}</span>
              ) : null}
              <label className="label">Contraseña*:</label>
              <input
                className="password1"
                id="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="error1">{formik.errors.password}.</span>
              ) : null}
              <div className="password"></div>
              <div className="password">
                <label className="labelCheck">
                  <input className="box" type="checkbox" />
                  Recuerdame.
                </label>
                <button className="forget">¿Olvidaste tu contraseña?</button>
              </div>

              <button className="principalButton" type="submit">
                Inicia tu Sesión
              </button>

              <Link className="link" to="/signin">
                <span className="register">
                  ¿Aún no haz creado tu cuenta?{" "}
                  <span className="register2">Presiona Aquí</span>
                </span>
                <button className="regButton">➤</button>
              </Link>
            </form>
          </div>
          <div className="container-img">
            <img
              className="sideImage"
              src={image}
              alt="Side help Ilustration"
            />
          </div>
        </div>
      )}
    </>
  );
};

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Este campo es requerido.";
  } else if (
    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
      values.email
    )
  ) {
    errors.email = "Formato invalido.";
  }
  if (!values.password && values.password.length < 8) {
    errors.password = "Este campo es requerido";
  }
  return errors;
};

export default Login;
