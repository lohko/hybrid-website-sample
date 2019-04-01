import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavigationBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <Router>
          <MDBNavbar
            scrolling
            transparent
            color="mdb-color darken-4"
            className="fixed-top"
            dark
            expand="md"
            style={{
              fontSize: "1.2rem",
              boxShadow: "none"
            }}
          >
            <MDBNavbarBrand>
              <strong>Your Company</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Services">Services</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/About">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/References">References</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/Contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}

export default NavigationBar;
