import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import NavigationBar from "../pages/components/NavigationBar";

import womanprofilepic from "../images/woman.jpg"
import manprofilepic from "../images/man.jpg"

class AboutPage extends Component {
  render() {
    const transparency = '';
    const fixed = "";
    return (
      <div>
        <NavigationBar navfixed={fixed} transparency={transparency} aboutactive="active"/>
        <MDBContainer className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center">
            Yritykseni
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
             Yrityksesi työntekijöiden esittely
          </p>
        <MDBCard
          className="text-center"
          style={{ boxShadow: "none" }}
        >
          <MDBCardBody>
            <MDBRow className="text-md-left">
              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <MDBCardImage
                    src={manprofilepic}
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Name</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Position
                  </h6>
                  <p className="grey-text">
                    Työntekijän esittelyteksti
                  </p>
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#!" className="p-2 fa-lg tw-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="#!" className="p-2 fa-lg dribbble-ic">
                    <MDBIcon fab icon="dribbble" />
                  </a>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <MDBCardImage
                    src={womanprofilepic}
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Name</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Position
                  </h6>
                  <p className="grey-text">
                    Työntekijän esittelyteksti
                  </p>
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#!" className="p-2 fa-lg yt-ic">
                    <MDBIcon fab icon="youtube" />
                  </a>
                  <a href="#!" className="p-2 fa-lg ins-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <MDBCardImage
                    src={womanprofilepic}
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Name</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Position
                  </h6>
                  <p className="grey-text">
                    Työntekijän esittelyteksti
                  </p>
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="#!" className="p-2 fa-lg tw-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="#!" className="p-2 fa-lg github-ic">
                    <MDBIcon fab icon="github" />
                  </a>
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <MDBCardImage
                    src={manprofilepic}
                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                    tag="img"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Name</h4>
                  <h6 className="font-weight-bold grey-text mb-3">
                    Position
                  </h6>
                  <p className="grey-text">
                    Työntekijän esittelyteksti
                  </p>
                  <a href="#!" className="p-2 fa-lg gplus-ic">
                    <MDBIcon fab icon="google-plus-g" />
                  </a>
                  <a href="#!" className="p-2 fa-lg li-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                  <a href="#!" className="p-2 fa-lg email-ic">
                    <MDBIcon icon="envelope" />
                  </a>
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

export default AboutPage;
