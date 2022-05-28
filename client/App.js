import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import AddDiet from "./components/AddDiet";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/newRecipe" exact component={AddRecipe} />
        <Route path="/diet" exact component={AddDiet} />
        <Route path="/recipeDetail/:id" component={RecipeDetails} />
        <Route path="/about" exact component={About} />
      </div>
    </React.Fragment>
  );
}

export default App;
