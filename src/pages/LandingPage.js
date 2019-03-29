import React, { Component } from "react";
import "../styles/LandingPage.css";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol
} from "mdbreact";

class LandingPage extends Component {
  render() {
    return (
      <div id="landingPage">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView id="landingpage_image_1">
                {/* landingpage_image_1 here */}
                <MDBMask
                  className="d-flex justify-content-center align-items-center"
                  overlay="black-light"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">
                          Hybrid website sample
                        </h1>

                        <h5 className="mt-2 mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit deleniti consequuntur nihil.
                        </h5>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView id="landingpage_image_2">
                <MDBMask
                  className="d-flex justify-content-center align-items-center"
                  overlay="black-light"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">
                          Hybrid website sample
                        </h1>

                        <h5 className=" mt-2 mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit deleniti consequuntur nihil.
                        </h5>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView id="landingpage_image_3">
                {/* landingpage_image_3 here */}
                <MDBMask
                  className="d-flex justify-content-center align-items-center"
                  overlay="black-light"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">
                          Hybrid website sample
                        </h1>

                        <h5 className="mt-2 mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit deleniti consequuntur nihil.
                        </h5>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    );
  }
}

export default LandingPage;
