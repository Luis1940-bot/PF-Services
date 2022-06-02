import { Route } from 'react-router-dom';
import Landingpage from "./components/Landingpage/Landingpage.js"

function App() {
  return (
    <div >
      <Route exact path="/" component={Landingpage} />
      app.js
    </div>
  );
}

export default App;
