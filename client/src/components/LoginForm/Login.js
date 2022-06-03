import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import image from "./helpImages/SideImage.png";
import google from "./helpImages/google.png";
import facebook from "./helpImages/facebook.png";
import responsive from "./helpImages/responsive.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />

      <form className="form">
        <h1 className="title">Login</h1>
        <input
          className="inputs"
          type="text"
          placeholder="User Name or E-mail"
        />
        <span className="error1">
          Please enter your user name or email again.
        </span>
        <input className="inputs" type="text" placeholder="Password" />
        <span className="error2">Incorrect password, please try again.</span>
        <div>
          <label class="labelCheck">
            <input type="checkbox" checked="checked" />
            Remember me.
          </label>
        </div>
        <button className="principalButton">LOGIN</button>
        <button className="forget">Forgot your password?</button>
      </form>
      <button className="buttons">
        <img className="buttonsImg" src={google} alt="google login" />
      </button>
      <button className="buttons">
        <img className="buttonsImg" src={facebook} alt="facebook login" />
      </button>
      <div className="sidePage">
        <img className="sideImage" src={image} alt="Side help Ilustration" />
      </div>
      <img className="responsive" src={responsive} alt="Just Responsive" />
    </>
  );
};

export default Login;
