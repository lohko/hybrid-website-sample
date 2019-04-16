import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCard
} from "mdbreact";
import NavigationBar from "../pages/components/NavigationBar";

class ReferencesPage extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
        <h2 className="h1-responsive text-center my-5">
          References
        </h2>
        <section className="text-center">
        <MDBRow>
          <MDBCol md="12" className="mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}
            >
              <div className="text-white  align-items-center rgba-black-strong py-5  rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Reference</strong>
                  </h3>
                  <p className="pb-3">
                    Tässä voit esitellä esimerkiksi yrityksesi tekemiä projekteja, saavutuksia tai vaikka suosituksia muilta yrityksiltä.
                  </p>
                  <MDBBtn color="dark" rounded size="md">
                    <MDBIcon far icon="clone" className="left" /> View page
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Reference</strong>
                  </h3>
                  <p className="pb-3">
                    Tässä voit esitellä esimerkiksi yrityksesi tekemiä projekteja, saavutuksia tai vaikka suosituksia muilta yrityksiltä.
                  </p>
                  <MDBBtn color="dark" rounded size="md">
                    <MDBIcon far icon="clone" className="left" /> View page
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="md-0 mb-4">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                <div>
                  <h3 className="py-3 font-weight-bold">
                    <strong>Reference</strong>
                  </h3>
                  <p className="pb-3">
                    Tässä voit esitellä esimerkiksi yrityksesi tekemiä projekteja, saavutuksia tai vaikka suosituksia muilta yrityksiltä.
                  </p>
                  <MDBBtn color="dark" rounded size="md">
                    <MDBIcon far icon="clone" className="left" /> View page
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>
      </div>
    );
  }
}

export default ReferencesPage;
