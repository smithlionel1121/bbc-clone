import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Footer extends Component {
  onHover = (e) => {
    e.target.style.textDecoration = "underline";
  };
  offHover = (e) => {
    e.target.style.textDecoration = "none";
  };

  render() {
    return (
      <Jumbotron className="mb-0 p-2 bg-dark rounded-0">
        <Container fluid className="d-flex flex-wrap  px-0">
          <Container>
            <Nav as={Row} className="justify-content-center">
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Home</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>News</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Sport</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Weather</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>iPlayer</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Sounds</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>CBBC</b>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>CBeebies</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Food</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Bitesize</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Arts</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Taster</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Local</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={Col} lg="2" md="3" sm="4" xs="6">
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Three</b>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav
              as={Row}
              className="justify-content-start mt-2 pt-2 border-top text-left text-nowrap"
            >
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Terms of Use</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>About the BBC</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Privacy Policy</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Cookies</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Accessibility Help</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Parental Guidance</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Contact the BBC</b>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Get Personalised Newsletters</b>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onMouseOver={this.onHover}
                  onMouseOut={this.offHover}
                  href=""
                  className="text-white"
                >
                  <b>Why you can trust the BBC</b>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav as={Row} className="text-left pt-4 text-white">
              <Nav.Item as={Col}>
                <h6>
                  © 2021 BBC. The BBC is not responsible for the content of
                  external sites. Read about our approach to external linking.
                </h6>
              </Nav.Item>
            </Nav>
          </Container>
        </Container>
      </Jumbotron>
    );
  }
}
