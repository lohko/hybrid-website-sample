import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../src/pages/components/NavigationBar";
import LandingPage from "../src/pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";
import Routes from "./pages/components/Routes"
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Routes></Routes>
            <NavigationBar />
            <FooterPage />
          </div>
        </Router>
    );
  }
}

export default App;
