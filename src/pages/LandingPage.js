import React, { Component } from "react";
import "../styles/LandingPage.css";
import NavigationBar from "../pages/components/NavigationBar";
import photo1 from "../images/january.jpg";
import photo2 from "../images/february.jpg";
import photo3 from "../images/march.jpg";

import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCardBody
} from "mdbreact";
import References from "./ReferencesPage";
import kuva2 from "../images/kuva2.jpg";
import chart from "../images/chart.jpg";

class LandingPage extends Component {
  render() {
    const transparency = "transparent";
    const fixed = "top";
    const active = "active";
    return (
      <div id="landingPage">
        <NavigationBar
          navfixed={fixed}
          transparency={transparency}
          homeactive={active}
        />
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
                  overlay="black-strong"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">Hybrid</h1>
                        <h5 className="mt-2 mb-4">
                          Hybrid sisältää scrollattavan etusivun ja lisäksi
                          sisältösivuja joissa voit kertoa tarkemmin esimerkiksi
                          yrityksesi toiminnasta, palveluista ja yrityksen
                          työntekijöistä.
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
                  overlay="black-strong"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">Hybrid</h1>

                        <h5 className=" mt-2 mb-4">
                          Hybrid sisältää scrollattavan etusivun ja lisäksi
                          sisältösivuja joissa voit kertoa tarkemmin esimerkiksi
                          yrityksesi toiminnasta, palveluista ja yrityksen
                          työntekijöistä.
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
                  overlay="black-strong"
                >
                  <MDBContainer className="px-md-3 px-sm-0">
                    <MDBRow>
                      <MDBCol md="12" className="mb-4 white-text text-center">
                        <h1 className="display-1 mb-0 pt-md-5">Hybrid</h1>

                        <h5 className="mt-2 mb-4">
                          Hybrid sisältää scrollattavan etusivun ja lisäksi
                          sisältösivuja joissa voit kertoa tarkemmin esimerkiksi
                          yrityksesi toiminnasta, palveluista ja yrityksen
                          työntekijöistä.
                        </h5>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

        <MDBContainer>
          <MDBRow className="text-center py-5" id="WelcomeBox">
            <section className="text-center">
              <h2 className="h1-responsive font-weight-bold pb-5">
                Ajankohtaista
              </h2>
              <MDBRow className="text-center">
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView className="overlay rounded z-depth-1" waves>
                    <img src={photo1} alt="" className="img-fluid" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                  <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold my-3 ">Tammikuu</h4>
                    <p className="grey-text">
                      Yrityksesi blogipostaus tammikuulta. Tarjoamme
                      kuukausiveloitteista ylläpoitopalvelua, jolla voimme
                      päivittää sivujanne joustavasti.
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView className="overlay rounded z-depth-1" waves>
                    <img src={photo2} alt="" className="img-fluid" />

                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                  <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold my-3">Helmikuu</h4>
                    <p className="grey-text">
                      Yrityksesi blogipostaus helmikuulta. Tarjoamme
                      kuukausiveloitteista ylläpoitopalvelua, jolla voimme
                      päivittää sivujanne joustavasti.
                    </p>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBView className="overlay rounded z-depth-1" waves>
                    <img src={photo3} alt="" className="img-fluid" />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                  <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold my-3">Maaliskuu</h4>
                    <p className="grey-text">
                      Yrityksesi blogipostaus maaliskuulta. Tarjoamme
                      kuukausiveloitteista ylläpoitopalvelua, jolla voimme
                      päivittää sivujanne joustavasti.
                    </p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol lg="6" className="px-0">
              <img src={chart} className="img-fluid" alt="image" />
            </MDBCol>
            <MDBCol
              lg="6"
              className="text-center align-items-center px-0"
              id="fourSectionTop"
            >
              <h2 className="h2-responsive mx-auto font-weight-bold my-5">
                Ennennäkemätön toteutus
              </h2>
              <p className="dark-grey-text w-responsive mx-auto">
                Vahvuutemme erittäin kilpaillulla alalla on edullisten
                hintojemme lisäksi huomattavasti laadukkaampi käyttöliittymä,
                tarjoamamme lisäpalvelut sekä itse kehittämämme pluginit, jotka
                toimivat saumattomasti sivuillamme.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol
              lg="6"
              className=" text-center md-0 px-0"
              id="fourSectionBottom"
            >
              <h2 className="h2-responsive mx-auto font-weight-bold my-5">
                Laadusta tinkimättä
              </h2>
              <p className="dark-grey-text w-responsive mx-auto">
                Toisin kuin mainostoimistot, emme käytä WordPressin kaltaisia
                epävakaita työkaluja. Vaan olemme perehtyneet huomattavasti
                vaativampiin tapoihin rakentaa verkkosivuja. Uskomme vakaasti
                suuntamme olevan oikea ja vastaavan verkkosivujen kehittymiseen
                liittyviin haasteisiin niin tänäkin päivänä, kuin
                tulevaisuudessa.
              </p>
            </MDBCol>
            <MDBCol lg="6" className="px-0">
              <img src={kuva2} className="img-fluid" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <References />
      </div>
    );
  }
}

export default LandingPage;
