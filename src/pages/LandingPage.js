import React, { Component } from "react";
import "../styles/LandingPage.css";
import NavigationBar from "../pages/components/NavigationBar";

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
import References from "./ReferencesPage"
import phone from "../images/art.jpg"
import kuva from "../images/kuva.jpg"

class LandingPage extends Component {
  render() {
    const transparency = 'transparent';
    const fixed = "top";
    return (
      <div id="landingPage">
        <NavigationBar navfixed={fixed} transparency={transparency}/>
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
        <MDBContainer className="text-center py-5 my-5">
          <h3>Otsikko</h3>
          <h6 style={{margin:"70px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.</h6>
        </MDBContainer>
        <MDBRow>
        <MDBCol style={{paddingRight:"0"}}>
          <img
            tag="img"
            src={kuva}
            className="img-fluid"
            alt="image"
            >
          </img>
        </MDBCol>
        <MDBCol style={{paddingLeft:"0"}} className="text-center align-items-center d-flex">
          <MDBRow  >
            <h1 style={{margin:"auto"}}>Otsikko</h1>
            <p style={{margin:"auto"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.
            </p>
          </MDBRow>
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol style={{paddingRight:"0"}} className="text-center align-items-center d-flex">
          <MDBRow  >
            <h1 style={{margin:"auto"}}>Otsikko</h1>
            <p style={{margin:"auto"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.
            </p>
          </MDBRow>
        </MDBCol>
        <MDBCol style={{paddingLeft:"0"}}>
          <img
            tag="img"
            src={kuva}
            className="img-fluid"
            alt="image"
            >
          </img>
        </MDBCol>
        </MDBRow>
        <References></References>
      </div>
    );
  }
}

export default LandingPage;
