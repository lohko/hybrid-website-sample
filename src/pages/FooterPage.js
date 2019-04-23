import React, { Component } from "react";
import {
  MDBCol,
  MDBLink,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class FooterPage extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            Submit to our newsletter!
          </MDBModalHeader>
          <MDBModalBody>
            <label htmlFor="formGroupExampleInput">Enter your email</label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput"
            />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="secondary" onClick={this.toggle}>
              Submit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBFooter color="elegant-color-dark">
          <MDBContainer className="py-3">
            <MDBRow className="mt-3">
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Yrityksen nimi</strong>
                </h6>
                <hr
                  className="white accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <a color="secondary">
                  <p>
                    Tilaa uutiskirjeemme!
                    <MDBIcon
                      onClick={this.toggle}
                      style={{ marginLeft: "10px" }}
                      far
                      icon="envelope"
                    />
                  </p>
                </a>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Sosiaalinen media</strong>
                </h6>
                <hr
                  className="white accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <MDBIcon fab className="mr-3" icon="instagram" /> Instagram
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="facebook" /> Facebook
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="twitter" /> Twitter
                </p>
                <p>
                  <MDBIcon fab className="mr-3" icon="youtube" /> YouTube
                </p>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Sivukartta</strong>
                </h6>
                <hr
                  className="white accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <a href="/">Koti</a>
                </p>
                <p>
                  <a href="/Services">Palvelut</a>
                </p>
                <p>
                  <a href="/About">Tietoa meistä</a>
                </p>
                <p>
                  <a href="/Contact">Ota yhteyttä</a>
                </p>
              </MDBCol>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Ota yhteyttä</strong>
                </h6>
                <hr
                  className="white accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px" }}
                />
                <p>
                  <i className="fa fa-home mr-3" /> Turku, 20100, FI
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@yrityksesi.fi
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
