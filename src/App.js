import React, { Component } from "react";
import "./App.css";
import NavigationBar from "../src/pages/components/NavigationBar";
import LandingPage from "../src/pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LandingPage />
        <ServicesPage />
        <AboutPage />
        <ContactPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
