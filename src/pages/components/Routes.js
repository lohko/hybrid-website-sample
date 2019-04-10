import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../LandingPage";
import ReferencesPage from "../ReferencesPage";
import AboutPage from "../AboutPage";
import ServicesPage from "../ServicesPage";
import ContactPage from "../ContactPage";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Services" component={ServicesPage} />
    <Route exact path="/About" component={AboutPage} />
    <Route exact path="/Contact" component={ContactPage} />
  </Switch>
);

export default Routes;
