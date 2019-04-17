import React, { Component } from "react";
import "../styles/Global.css";
import NavigationBar from "../pages/components/NavigationBar";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

class ServicesPage extends Component {
  render() {
    const transparency = "";
    const fixed = "";
    return (
      <div id="servicespage">
        <NavigationBar
          navfixed={fixed}
          transparency={transparency}
          servicesactive="active"
        />
        <MDBContainer className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center">
            Palvelut
          </h2>
          <p className="grey-darken-1-text w-responsive text-center mx-auto mb-5">
            Tällä sivulla voit esitellä tuotteesi ja palvelusi lukemattomilla
            tavoilla. Käytössänne on reaktiiviset ja automaattisesti
            skaalautuvat kuvakarusellit, kollaasit, blogipostaukset sekä monet
            muut eri asettelutyylit, jotka valmistamme aina asiakkaamme vision
            mukaisiksi.
          </p>

          <MDBRow>
            <MDBCol lg="5" className="mb-3">
              <img
                src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
                className="img-fluid rounded z-depth-2"
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol md="1">
                  <MDBIcon
                    far
                    icon="chart-bar"
                    size="2x"
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3 paragraph">Unelmoi</h5>
                  <p className="grey-darken-1-text">
                    Voimme taata, ettet varmasti keksi niin hullua ideaa,
                    ettemme haluaisi olla sitä toteuttamassa. Olemme itsekin
                    joukko suuruudenhulluja ja intohimolla työtä tekeviä nuoria,
                    jotka varmasti vastaavat haasteeseen kuin haasteeseen.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1" size="2">
                  <MDBIcon
                    far
                    icon="handshake"
                    size="2x"
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3">Suunnittele</h5>
                  <p className="grey-darken-1-text">
                    Verkkosivujen suunnittelussa meitä kiehtoo sen rajattomuus.
                    Näemme uuden projektin aina tyhjänä canvaksena, jossa
                    jokainen pensselinveto kertoo oman tarinansa ja piirtää
                    kokonaisuutena kuvan, joka varmasti jää mieleen.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol md="1">
                  <MDBIcon
                    fas
                    icon="user-cog"
                    size="2x"
                    className="deep-purple-text"
                  />
                </MDBCol>
                <MDBCol md="11">
                  <h5 className="font-weight-bold mb-3">Toteuta</h5>
                  <p className="grey-darken-1-text">
                    Käyttämämme työkalut sekä frameworkit varmistavat suurtenkin
                    kokonaisuuksien virheettömän skaalauksen sekä
                    responsiivisuuden. Tavaramerkkimme on tinkimättömyys,
                    tarkkuus sekä toimivuus.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ServicesPage;
