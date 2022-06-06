//<<<<<<< Juan-Form-LogIn
import { Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage.js";
import Login from "./components/LoginForm/Login.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div>
//=======
import { Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar"
import Landingpage from "./components/Landingpage/Landingpage.js"

function App() {
  return (
    <div >
//>>>>>>> front_end
      <Navbar />
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
