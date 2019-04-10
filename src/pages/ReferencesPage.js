import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput
} from "mdbreact";

class ReferencesPage extends Component {
  render() {
    return (
      <div>
        <MDBContainer my="5">
          <h2 className="h1-responsive text-center my-5">
            References
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Tässä voit esitellä yrityksesi toteuttamia projekteja.
          </p>
        </MDBContainer>
      </div>
    );
  }
}

export default ReferencesPage;
