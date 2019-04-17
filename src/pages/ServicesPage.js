import React, { Component } from "react";
import "../styles/Global.css";
import NavigationBar from "../pages/components/NavigationBar";
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
    const transparency = '';
    const fixed = "";
    return (
      <div id="servicespage">
        <NavigationBar navfixed={fixed} transparency={transparency} servicesactive="active"/>
        <MDBContainer className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center">
            Your Services
          </h2>
          <p className="grey-darken-1-text w-responsive text-center mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>

          <MDBRow>
            <MDBCol lg="5" className="mb-3">
              <img
                src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
                className="img-fluid rounded z-depth-2"
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol md="1">
                  <MDBIcon
                    far
                    icon="chart-bar"
                    size="2x"
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3 paragraph">
                    Grow your business
                  </h5>
                  <p className="grey-darken-1-text">
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
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3">Entertainment</h5>
                  <p className="grey-darken-1-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                    Reprehenderit maiores nam, aperiam minima elit assumenda
                    voluptate velit.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1">
                  <MDBIcon
                    fas
                    icon="user-cog"
                    size="2x"
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3">Communication</h5>
                  <p className="grey-darken-1-text">
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
