import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <div>
        <MDBFooter color="mdb-color darken-4">
          <MDBContainer className="py-3">
            <MDBRow className="mt-3">
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Company name</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  Here you can use rows and columns here to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Social Media</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <MDBIcon fab className="mr-3" icon="instagram" /> Yourcompany
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="facebook" /> Yourcompany
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="twitter" /> Yourcompany
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="youtube" /> Yourcompany
                </p>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Site navigation</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a href="/">Home</a>
                </p>
                <p>
                  <a href="/Services">Services</a>
                </p>
                <p>
                  <a href="/About">About</a>
                </p>
                <p>
                  <a href="/Contact">Contact</a>
                </p>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <i className="fa fa-home mr-3" /> Turku, 12345, FI
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@yourcompany.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 01 234 567 89
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.lohkosoftware.com"> Lohkosoftware.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default FooterPage;
