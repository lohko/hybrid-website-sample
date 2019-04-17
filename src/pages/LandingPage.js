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
import kuva2 from "../images/kuva2.jpg"
import chart from "../images/chart.jpg"


class LandingPage extends Component {
  render() {
    const transparency = 'transparent';
    const fixed = "top";
    const active = "active"
    return (
      <div id="landingPage">
        <NavigationBar navfixed={fixed} transparency={transparency} homeactive={active}/>
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
                          Keep in mind that this is an empty canvas. We will craft it just like you want it.
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
                          Keep in mind that this is an empty canvas. We will craft it just like you want it.
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
                          Keep in mind that this is an empty canvas. We will craft it just like you want it.
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
          <h3>Hybrid</h3>
          <h6 style={{margin:"70px"}}>
              Hybrid sivut sisältävät scrollattavan etusivun ja lisäksi sisältösivuja joissa voit kertoa tarkemmin esimerkiksi yrityksesi toiminnasta, palveluista ja yrityksen työntekijöistä.</h6>
        </MDBContainer>
        <MDBRow >
        <MDBCol md="6" style={{paddingRight:"0"}}>
          <img
            tag="img"
            src={chart}
            className="img-fluid"
            alt="image"
            >
          </img>
        </MDBCol>
        <MDBCol md="6"  style={{marginLeft:"0",paddingLeft:"0"}} className="text-center align-items-center d-flex">
          <MDBRow>
            <h1 style={{margin:"auto"}}>Otsikko</h1>
            <p style={{margin:"auto"}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit deleniti consequuntur nihil.
            </p>
          </MDBRow>
        </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol md="6" className="md-0 mb-4" style={{marginRight:"0",paddingRight:"0"}} className="text-center align-items-center d-flex">
          <MDBRow>
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
            src={kuva2}
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
