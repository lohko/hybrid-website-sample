import React, { Component } from "react";
import "../styles/LandingPage.css";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBRow
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
          id="landingpage_carousel"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView id="landingpage_image_1">
                {/* landingpage_image_1 here */}
                <MDBMask
                  className="landingpage_mask text-center"
                  overlay="black-light"
                >
                  <h1 className="landingpage_header">
                    Welcome to the Hybrid website!
                  </h1>
                  <p className="landingpage_paragraph">
                    This landing page. You can have photos of your company
                    played here!
                  </p>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView id="landingpage_image_2">
                {/* landingpage_image_2 here */}{" "}
                <MDBMask
                  className="landingpage_mask text-center"
                  overlay="black-light"
                >
                  <h1 className="landingpage_header">
                    Welcome to the Hybrid website!
                  </h1>
                  <p className="landingpage_paragraph">
                    This landing page. You can have photos of your company
                    played here!
                  </p>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView id="landingpage_image_3">
                {/* landingpage_image_3 here */}
                <MDBMask
                  className="landingpage_mask text-center"
                  overlay="black-light"
                >
                  <h1 className="landingpage_header">
                    Welcome to the Hybrid website!
                  </h1>
                  <p className="landingpage_paragraph">
                    This landing page. You can have photos of your company
                    played here!
                  </p>
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
