import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="align-items-center"
      >
        <Container>
          <Navbar.Brand>
            <span>
              <svg
                width="5rem"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 210.69 60"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M36.76 33.87c-2.21-.78-3.78-.78-7.12-.78h-5.18v11.79H30c4.28 0 5.61-.25 7.37-1a5.58 5.58 0 002.47-2 4.86 4.86 0 00.85-2.55 5.11 5.11 0 00-.87-3.33 6.31 6.31 0 00-3.06-2.13zM35.25 24.36a5.28 5.28 0 001.51-4.23c-.06-2.62-1.6-5-7.63-5h-4.67v11.21h3.37c3.56 0 6.01-.62 7.42-1.98z"></path>
                <path d="M0 0v60h63.76V0zm46.69 45.76a11.33 11.33 0 01-5.3 4.24 22.16 22.16 0 01-8.89 1.64H16.72V8.41h12.21a22.73 22.73 0 019 1.44 11.34 11.34 0 014.94 4 9.73 9.73 0 011.8 5.93c0 4.09-1.77 6.94-5.51 8.86a13.9 13.9 0 016.74 3.92 10.42 10.42 0 012.71 7.32 10.86 10.86 0 01-1.92 5.88zM110.22 33.87c-2.21-.78-3.78-.78-7.12-.78h-5.17v11.79h5.5c4.28 0 5.62-.25 7.37-1a5.53 5.53 0 002.47-2 4.69 4.69 0 00.85-2.55 5 5 0 00-.84-3.35 6.22 6.22 0 00-3.06-2.11zM108.71 24.36a5.24 5.24 0 001.51-4.23c-.06-2.62-1.59-5-7.62-5h-4.67v11.21h3.37c3.56 0 6.01-.62 7.41-1.98z"></path>
                <path d="M73.46 0v60h63.76V0zm46.69 45.76a11.35 11.35 0 01-5.29 4.24 22.16 22.16 0 01-8.86 1.63H90.19V8.41h12.21a22.73 22.73 0 019 1.44 11.31 11.31 0 014.93 4 9.67 9.67 0 011.8 5.93c.06 4.09-1.76 6.94-5.51 8.86a13.86 13.86 0 016.74 3.92 10.38 10.38 0 012.71 7.32 10.78 10.78 0 01-1.92 5.88zM146.93 0v60h63.76V0zM198 48.24a36.9 36.9 0 01-8.07 3 38.19 38.19 0 01-8.6.93 28.11 28.11 0 01-12.73-2.8 22.06 22.06 0 01-8.73-7.84 20.39 20.39 0 01-3.35-11.13 21.92 21.92 0 013.4-11.71 23 23 0 019-8A28.39 28.39 0 01182 7.86a35.63 35.63 0 017.52 1 58.32 58.32 0 018 2.65v8A40.05 40.05 0 00189.8 16a28.65 28.65 0 00-7.39-1.28 19.92 19.92 0 00-9 1.7 15.8 15.8 0 00-6.57 5.51 14.64 14.64 0 006.46 21.71 21.75 21.75 0 009.09 1.65 26.09 26.09 0 007.1-1.2 34.81 34.81 0 008.5-4z"></path>
              </svg>
              <span className="sr-only">BBC Homepage</span>
            </span>
          </Navbar.Brand>
          <Nav.Link href="" className="border-lg-right">
            <svg
              viewBox="0 0 32 32"
              width="1.25rem"
              height="1.25rem"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M12.9 30.2c.8.9 1.8 1.3 3.1 1.3s2.3-.4 3.1-1.3c.8-.9 1.2-1.9 1.2-3h-8.5c0 1.1.3 2.2 1.1 3zm16-8.8c-1.4-.2-2.4-.6-3.1-1.3-.6-.7-1-1.7-1-3.1v-4c0-2.2-.6-4.1-1.8-5.5-1.2-1.5-2.8-2.4-5-2.8V.5h-4.4v4.1C11.7 5.1 10 6 8.8 7.5 7.7 8.9 7.1 10.8 7.1 13v3.9c0 1.4-.3 2.4-.9 3.1-.6.7-1.7 1.1-3.1 1.3l-1.5.2v3h28.9v-3l-1.6-.1z"></path>
            </svg>
          </Nav.Link>
          <Nav.Link href="" className="border-lg-right">
            <svg
              viewBox="0 0 32 32"
              width="1.25rem"
              height="1.25rem"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M16 1C7.7 1 1 7.4 1 16c0 8.5 6.7 15 15 15 2.8 0 5.6-.8 7.8-2.2-1.5-3.2-4.6-5-8.6-5-2.6 0-4.8.8-6.5 2.2-3.1-2.3-5.1-5.9-5.1-10C3.7 9 9.2 3.6 16 3.6S28.3 8.9 28.3 16c0 3.7-1.5 6.8-3.9 9.1l1.6 2.1c3.1-2.7 5-6.7 5-11.2 0-8.7-6.7-15-15-15zm0 20.8c3.2 0 5.8-2.5 5.8-5.8s-2.5-5.8-5.8-5.8-5.8 2.5-5.8 5.8 2.5 5.8 5.8 5.8z"></path>
            </svg>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-around w-100 align-items-center">
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  News
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  Sport
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  Weather
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  iPlayer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  Sounds
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  CBBC
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="" className="border-lg-right">
                  CBeebies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Food</NavDropdown.Item>
                  <NavDropdown.Item href="">Bitesize</NavDropdown.Item>
                  <NavDropdown.Item href="">Arts</NavDropdown.Item>
                  <NavDropdown.Item href="">Taster</NavDropdown.Item>
                  <NavDropdown.Item href="">Local</NavDropdown.Item>
                  <NavDropdown.Item href="">Three</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>

              <Nav.Item>
                <Form inline className="justify-content-center">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
