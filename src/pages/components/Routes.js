import React from "react";
import { Switch, Route } from "route-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../LandingPage";
import ReferencesPage from "../References";
import AboutPage from "../AboutPage";
import ServicesPage from "../ServicesPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/References" component={ReferencesPage} />
    <Route exact path="/Services" component={ServicesPage} />
    <Route exact path="/About" component={AboutPage} />
    <Route exact path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;
