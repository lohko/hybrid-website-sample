import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/NavigationBar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler
} from "mdbreact";

class NavigationBar extends Component {
  state = {
    collapse1: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <MDBContainer fluid id="navigationbar_container">
            <MDBNavbar id="navigationbar">
              <MDBContainer fluid>
                <MDBNavbarBrand>Hybrid</MDBNavbarBrand>
                <MDBHamburgerToggler
                  color="#ffffff"
                  id="hamburger1"
                  onClick={() => this.toggleSingleCollapse("collapse1")}
                />
                <MDBCollapse isOpen={this.state.collapse1} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#!">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </MDBContainer>
        </BrowserRouter>
      </div>
    );
  }
}

export default NavigationBar;
