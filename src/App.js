import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../src/pages/NavigationBar";
import LandingPage from "../src/pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import FooterPage from "./pages/FooterPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LandingPage />
        <ServicesPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
