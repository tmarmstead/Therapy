import React from "react";
import './App.css';
import "@fontsource/roboto";
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import Navigation from './components/Navbar/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Paper from "@material-ui/core"/

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </BrowserRouter>


      </div>
    </div >
  )
}

export default App;
