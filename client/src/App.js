import { Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar"
import Landingpage from "./components/Landingpage/Landingpage.js"

function App() {
  return (
    <div >
      <Navbar />
      <Route exact path="/" component={Landingpage} />
      app.js
    </div>
  );
}

export default App;
