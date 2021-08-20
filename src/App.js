
import './App.css';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route  path="/services">
            <Services />
          </Route>

          <Route  path="/products">
            <Products />
          </Route>
          <Route  path="/sign-up">
            <SignUp />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;

