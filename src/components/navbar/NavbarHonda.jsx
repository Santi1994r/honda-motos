import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import CartWidget from "../cartWidget/CartWidget";
import './navbarStyle.css'


const NavbarHonda = () => {
  return (
    <>
      <Navbar className="navBarMotos" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <NavDropdown className="p-2" title="Menu" id="basic-nav-dropdown">
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
              <NavDropdown.Divider />
              <NavLink className="navlink" to="/catalogo">
                Catálogo
              </NavLink>
              <NavDropdown.Divider />
              <NavLink className="navlink" to="/categoria/enduro">
                Enduro
              </NavLink>
              <NavDropdown.Divider />
              <NavLink className="navlink" to="/categoria/naked">
                Naked
              </NavLink>
            </NavDropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-end">
              <Button
                href="#"
                target="_blanck"
                className="honda"
                variant="link"
              >
                <NavLink to="/">
                  <img className="logoHonda" src='./assets/images/logo.png' alt="logo honda" />
                </NavLink>
              </Button>
            </Nav>
            <Nav className="containerLogo w-100">
              <div className="d-flex justify-content-end">
                <img
                  className="logoRedes"
                  src="../assets/images/instagram.png"
                  alt="instagram"
                />
                <img
                  className="logoRedes"
                  src="../assets/images/facebook.png"
                  alt="facebook"
                />
                <img
                  className="logoRedes"
                  src="../assets/images/twitter.png"
                  alt="twitter"
                />
                <CartWidget />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHonda;
