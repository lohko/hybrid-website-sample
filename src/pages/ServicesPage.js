import React, { Component } from "react";
import "../styles/Global.css";

import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

class ServicesPage extends Component {
  render() {
    return (
      <div id="servicespage">
        <MDBContainer>
          <h2 className="header text-center">Your Services</h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>

          <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                alt=""
                className="img-fluid rounded z-depth-1"
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon
                    far
                    icon="chart-bar"
                    size="2x"
                    className="indigo-text"
                  />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Marketing</h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon
                    far
                    icon="handshake"
                    size="2x"
                    className="pink-text"
                  />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Entertainment</h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon far icon="smile" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Communication</h5>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ServicesPage;
