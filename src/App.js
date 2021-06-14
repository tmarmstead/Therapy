import React from "react";
import './App.css';
import "@fontsource/roboto";
// import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact'
import Navigation from './components/Navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from "./Pages/Landing";
// import Paper from "@material-ui/core"/

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>

            <Route exact path="/home" component={Landing} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </BrowserRouter>



      </div>
    </div >
  )
}

export default App;
