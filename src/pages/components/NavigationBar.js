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
import Routes from "./Routes";
class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <MDBNavbar
        color="mdb-color darken-4"
        transparent={this.props.transparency}
        dark
        fixed={this.props.navfixed}
        scrolling
        expand="md"
        style={{
          fontSize: "1.2rem",
          boxShadow: "none"
        }}
      >
        <MDBNavbarBrand>
          <strong>Yrityksesi</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active={this.props.homeactive}>
              <MDBNavLink to="/">Koti</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.props.servicesactive}>
              <MDBNavLink onClick={this.click} to="/Services">
                Palvelut
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.props.aboutactive}>
              <MDBNavLink to="/About">Tietoa meistä</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={this.props.contactactive}>
              <MDBNavLink to="/Contact">Ota yhteyttä</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavigationBar;
